import * as React from "react"
import Layout from "../containers/Layout"
import BlogWidget from "../components/BlogWidget"
import SEO from "../components/SEO"
import { Link } from "gatsby"

const ArticlePage = ({ pageContext: { pageData, menuData, categories } }) => {
  const article = pageData
  const menuItems = menuData.data.butterCollection.value[0].menu_items

  return (
    <Layout menuItems={menuItems}>
      <SEO title={article.title} description={article.meta_description} />

      <section id="blog-header" className="single-post-nav">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h2>{article.title}</h2>
                <ul className="breadcrumb-nav">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li>{article.title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-post">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 col-12">
              <div className="single-post">
                <div className="single-post-meta">
                  <h2 className="single-post-header">{article.title}</h2>
                  <ul className="single-post-meta-info">
                    <li>
                      <a href="#">{article.author.profile_image && <img src={article.author.profile_image} alt="#" />} {article.author.first_name} {article.author.last_name}</a>
                    </li>
                    <li>
                      <a href="#"><i className="lni lni-calendar"></i> {new Date(article.published).toDateString()}
                      </a>
                    </li>
                    <li>
                      {article.tags.map((tag, i) => {
                        return <Link key={i} to={`/blog/tag/${tag.slug}`}><i className="lni lni-tag"></i> {tag.name}</Link>
                      })}
                    </li>
                  </ul>
                </div>

                {article.featured_image && <div className="single-post-thumbnail">
                  <img src={article.featured_image} alt={article.featured_image_alt} />
                </div>}

                <div className="single-post-body" dangerouslySetInnerHTML={{ __html: article.body }}></div>
              </div>
            </div>

            {/* <!-- Searchbox --> */}
            <aside className="col-lg-4 col-md-12 col-12">
              <BlogWidget categories={categories} />
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ArticlePage
