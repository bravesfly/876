import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Metadata } from "next";
import './home.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import FAQ from '@/components/faq'
import Carousel from '@/components/carousel'
import HowItWork from "@/components/how-it-work";
import Hero from "@/components/hero";
import MainHero from "@/components/MainHero";
import Categories from "@/components/Categories";
import Impact from "@/components/Impact";
export const metadata: Metadata = {
  title: 'The best way to get auto parts | Spark Auto Part Assistant',
};
export default function Home() {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-wrapper">
        <MainHero></MainHero>
        <Hero></Hero>
        <HowItWork></HowItWork>
        <Categories></Categories>
        <Impact></Impact>
        <section className="section_cta"><div className="padding-box padding-section-small"><div className="container-large"><div className="cta_wrap"><div className="cta_content"><div className="cta_content-header"><h2 className="text-7xl" style={{
          "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
        }}>Ready to make the switch to a faster, smarter, and stress-free way to buy auto parts?</h2><div className="cta_header-description" style={{
          "transform": "translate3d(0 px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
        }}><div className="text-base text-lineheight-2xl">Skip the long lines, guesswork, and endless shop visits. With Spark Auto Part Assistant, you simply tell us what you need — or upload your vehicle registration to help us confirm it for you.
          We’ll take it from there: sourcing the right parts, comparing  prices , and  arrang ing de livery  or pickup . It’s the easiest, most reliable way for Jamaican drivers to get parts — fast.</div>
          </div>
        </div>
          <div className="button-wrapper" style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }}><a href="/contact-us" className="button is-secondary w-inline-block"><div className="button-background is-white-bg" style={{
            "transform": "translate3d(0%, 0rem, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }}></div>
              <div className="text-block">Get My Quote Now →</div>
            </a></div>
        </div>
          <div className="cta_visual"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6734e8c0aacf5dd7297e8d8c_cta%20image.webp" loading="lazy" sizes="(max-width: 1352px) 100vw, 1352px" srcSet="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6734e8c0aacf5dd7297e8d8c_cta%20image-p-500.webp 500w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6734e8c0aacf5dd7297e8d8c_cta%20image-p-800.webp 800w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6734e8c0aacf5dd7297e8d8c_cta%20image-p-1080.webp 1080w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6734e8c0aacf5dd7297e8d8c_cta%20image.webp 1352w" alt="" className="img" style={{
            "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "filter": "blur(0px)", "transformStyle": "preserve-3d"
          }} /></div>
        </div>
        </div>
        </div>
        </section>
        <section className="section_testimonials"><div className="padding-global padding-section-medium"><div className="container-medium"><div className="testimonials_wrap"><div className="testimonials_header"><div className="badge" style={{
          "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
        }}><div className="text-sm text-style-allcaps"> Testimonials</div>
        </div>
          <div className="testimonials_title" style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }}><h2 className="text-6xl">What Drivers Say About Spark</h2></div>
          <div className="text-base text-lineheight-2xl" style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }}>At Spark Auto Part Assistant, we help Jamaican drivers get the right parts quickly, confidently, and without hassle. But don’t just take our word for it — hear from real customers who’ve used our service and never looked back.</div>
        </div>
          <Carousel></Carousel>
        </div>
        </div>
        </div>
        </section>
        {/* <section className="section_blog-slider"><div className="padding-global padding-section-medium"><div className="container-medium"><div className="blog-slider_wrap"><div className="blog-slider_header"><h2 style={{
          "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
        }} className="text-6xl text-style-pretty">Recent blog posts &amp; updates</h2><div className="blog-slider_description"><div style={{
          "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
        }} className="text-base text-lineheight-2xl">Discover how our commitment to quality, reliability, and eco-friendly practices transforms spaces into cleaner, healthier environments.</div>
            <div style={{
              "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
            }} className="button-wrapper"><a href="/blog" className="button w-inline-block"><div className="button-background" style={{
              "transform": "translate3d(0%, 0rem, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "willChange": "transform", "transformStyle": "preserve-3d"
            }}></div>
                <div className="text-block">View more</div>
              </a></div>
          </div>
        </div>
          <div data-delay="4000" data-animation="slide" className="slider w-slider" data-autoplay="false" data-easing="ease" style={{
            "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
          }} data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true" role="region" aria-label="carousel"><div className="blog-slider_mask w-slider-mask" id="w-slider-mask-0"><div className="slide w-slide" aria-label="1 of 9" role="group" style={{ "transition": "all", "transform": "translateX(0px)", "opacity": "1" }}><div className="w-dyn-list"><div role="list" className="w-dyn-items"><div role="listitem" className="w-dyn-item"><a href="/blogs/innovative-cleaning-technologies-to-watch-in-2024" className="blogs_card w-inline-block"><div className="blogs-card-content"><div className="blogs-card-badge"><div className="badge-primary"><div className="text-xs text-color-blue">Business cleaning</div>
          </div>
          </div>
            <div className="blogs-card-text"><div className="blogs-card-title"><h3 className="text-2xl text-style-pretty">Innovative Cleaning Technologies to Watch in 2024</h3></div>
              <div className="text-base text-color-secondary text-lineheight-3xl">In today’s world, maintaining a clean home doesn’t have to come at the expense of the environment.</div>
            </div>
            <div className="blog-slider_card-link"><div className="text-base text-weight-bold is-categories-card-link">Contact Us</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-small" style={{
                "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d"
              }}><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
          </div>
            <div className="blogs-card-visual"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d086ebf4c64ce8c784323_Rectangle%2039.webp" loading="lazy" alt="" sizes="100vw" srcSet="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d086ebf4c64ce8c784323_Rectangle%2039-p-500.webp 500w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d086ebf4c64ce8c784323_Rectangle%2039-p-800.webp 800w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d086ebf4c64ce8c784323_Rectangle%2039-p-1080.webp 1080w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d086ebf4c64ce8c784323_Rectangle%2039-p-1600.webp 1600w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d086ebf4c64ce8c784323_Rectangle%2039-p-2000.webp 2000w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d086ebf4c64ce8c784323_Rectangle%2039.webp 2263w" className="img" style={{
              "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d"
            }} /></div>
          </a></div>
          </div>
          </div>
          </div>
              <div className="slide w-slide" aria-label="2 of 9" role="group" style={{ "transition": "all", "transform": "translateX(0px)", "opacity": "1" }} aria-hidden="true"><div className="w-dyn-list" aria-hidden="true"><div role="list" className="w-dyn-items" aria-hidden="true"><div role="listitem" className="w-dyn-item" aria-hidden="true"><a href="/blogs/eco-friendly-cleaning-sustainable-practices-for-your-business" className="blogs_card w-inline-block" tabIndex={-1} aria-hidden="true"><div className="blogs-card-content" aria-hidden="true"><div className="blogs-card-badge" aria-hidden="true"><div className="badge-primary" aria-hidden="true"><div className="text-xs text-color-blue" aria-hidden="true">Business cleaning</div>
              </div>
              </div>
                <div className="blogs-card-text" aria-hidden="true"><div className="blogs-card-title" aria-hidden="true"><h3 className="text-2xl text-style-pretty" aria-hidden="true">Eco-Friendly Cleaning: Sustainable Practices for Your Business</h3></div>
                  <div className="text-base text-color-secondary text-lineheight-3xl" aria-hidden="true">In today’s world, maintaining a clean home doesn’t have to come at the expense of the environment.</div>
                </div>
                <div className="blog-slider_card-link" aria-hidden="true"><div className="text-base text-weight-bold is-categories-card-link" aria-hidden="true">Contact Us</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-small" aria-hidden="true"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"></path></svg></div>
              </div>
                <div className="blogs-card-visual" aria-hidden="true"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d2f488b45f40b25518da6_Rectangle%201913%20(1).webp" loading="lazy" alt="" sizes="100vw" srcSet="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d2f488b45f40b25518da6_Rectangle%201913%20(1)-p-500.webp 500w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d2f488b45f40b25518da6_Rectangle%201913%20(1)-p-800.webp 800w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d2f488b45f40b25518da6_Rectangle%201913%20(1)-p-1080.webp 1080w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d2f488b45f40b25518da6_Rectangle%201913%20(1)-p-1600.webp 1600w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d2f488b45f40b25518da6_Rectangle%201913%20(1)-p-2000.webp 2000w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d2f488b45f40b25518da6_Rectangle%201913%20(1).webp 2280w" className="img" aria-hidden="true" /></div>
              </a></div>
              </div>
              </div>
              </div>
              <div className="slide w-slide" aria-label="3 of 9" role="group" style={{ "transition": "all", "transform": "translateX(0px)", "opacity": "1" }} aria-hidden="true"><div className="w-dyn-list" aria-hidden="true"><div role="list" className="w-dyn-items" aria-hidden="true"><div role="listitem" className="w-dyn-item" aria-hidden="true"><a href="/blogs/how-clean-spaces-boost-employee-productivity" className="blogs_card w-inline-block" tabIndex={-1} aria-hidden="true"><div className="blogs-card-content" aria-hidden="true"><div className="blogs-card-badge" aria-hidden="true"><div className="badge-primary" aria-hidden="true"><div className="text-xs text-color-blue" aria-hidden="true">Business cleaning</div>
              </div>
              </div>
                <div className="blogs-card-text" aria-hidden="true"><div className="blogs-card-title" aria-hidden="true"><h3 className="text-2xl text-style-pretty" aria-hidden="true">How Clean Spaces Boost Employee Productivity</h3></div>
                  <div className="text-base text-color-secondary text-lineheight-3xl" aria-hidden="true">In today’s world, maintaining a clean home doesn’t have to come at the expense of the environment.</div>
                </div>
                <div className="blog-slider_card-link" aria-hidden="true"><div className="text-base text-weight-bold is-categories-card-link" aria-hidden="true">Contact Us</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-small" style={{
                    "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d"
                  }} aria-hidden="true"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"></path></svg></div>
              </div>
                <div className="blogs-card-visual" aria-hidden="true"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0aa7e6b9f1698fe7e8c2_Frame%201321316125.webp" loading="lazy" alt="" sizes="100vw" srcSet="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0aa7e6b9f1698fe7e8c2_Frame%201321316125-p-500.webp 500w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0aa7e6b9f1698fe7e8c2_Frame%201321316125-p-800.webp 800w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0aa7e6b9f1698fe7e8c2_Frame%201321316125-p-1080.webp 1080w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0aa7e6b9f1698fe7e8c2_Frame%201321316125-p-1600.webp 1600w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0aa7e6b9f1698fe7e8c2_Frame%201321316125.webp 2280w" className="img" style={{
                  "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d"
                }} aria-hidden="true" /></div>
              </a></div>
              </div>
              </div>
              </div>
              <div className="slide w-slide" aria-label="4 of 9" role="group" style={{ "transition": "all", "transform": "translateX(0px)", "opacity": "1" }} aria-hidden="true"><div className="w-dyn-list" aria-hidden="true"><div role="list" className="w-dyn-items" aria-hidden="true"><div role="listitem" className="w-dyn-item" aria-hidden="true"><a href="/blogs/top-5-cleaning-challenges-in-commercial-spaces" className="blogs_card w-inline-block" tabIndex={-1} aria-hidden="true"><div className="blogs-card-content" aria-hidden="true"><div className="blogs-card-badge" aria-hidden="true"><div className="badge-primary" aria-hidden="true"><div className="text-xs text-color-blue" aria-hidden="true">Business cleaning</div>
              </div>
              </div>
                <div className="blogs-card-text" aria-hidden="true"><div className="blogs-card-title" aria-hidden="true"><h3 className="text-2xl text-style-pretty" aria-hidden="true">Top 5 Cleaning Challenges in Commercial Spaces</h3></div>
                  <div className="text-base text-color-secondary text-lineheight-3xl" aria-hidden="true">In today’s world, maintaining a clean home doesn’t have to come at the expense of the environment.</div>
                </div>
                <div className="blog-slider_card-link" aria-hidden="true"><div className="text-base text-weight-bold is-categories-card-link" aria-hidden="true">Contact Us</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-small" aria-hidden="true"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"></path></svg></div>
              </div>
                <div className="blogs-card-visual" aria-hidden="true"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0daec96d3886bd43c117_Frame%201321316126.webp" loading="lazy" alt="" sizes="100vw" srcSet="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0daec96d3886bd43c117_Frame%201321316126-p-500.webp 500w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0daec96d3886bd43c117_Frame%201321316126-p-800.webp 800w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0daec96d3886bd43c117_Frame%201321316126-p-1080.webp 1080w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0daec96d3886bd43c117_Frame%201321316126-p-1600.webp 1600w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0daec96d3886bd43c117_Frame%201321316126-p-2000.webp 2000w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0daec96d3886bd43c117_Frame%201321316126.webp 2280w" className="img" aria-hidden="true" /></div>
              </a></div>
              </div>
              </div>
              </div>
              <div className="slide w-slide" aria-label="5 of 9" role="group" style={{ "transition": "all", "transform": "translateX(0px)", "opacity": "1" }} aria-hidden="true"><div className="w-dyn-list" aria-hidden="true"><div role="list" className="w-dyn-items" aria-hidden="true"><div role="listitem" className="w-dyn-item" aria-hidden="true"><a href="/blogs/the-future-of-office-cleaning-trends-you-need-to-know" className="blogs_card w-inline-block" tabIndex={-1} aria-hidden="true"><div className="blogs-card-content" aria-hidden="true"><div className="blogs-card-badge" aria-hidden="true"><div className="badge-primary" aria-hidden="true"><div className="text-xs text-color-blue" aria-hidden="true">Business cleaning</div>
              </div>
              </div>
                <div className="blogs-card-text" aria-hidden="true"><div className="blogs-card-title" aria-hidden="true"><h3 className="text-2xl text-style-pretty" aria-hidden="true"> The Future of Office Cleaning: Trends You Need to Know</h3></div>
                  <div className="text-base text-color-secondary text-lineheight-3xl" aria-hidden="true">In today’s world, maintaining a clean home doesn’t have to come at the expense of the environment.</div>
                </div>
                <div className="blog-slider_card-link" aria-hidden="true"><div className="text-base text-weight-bold is-categories-card-link" aria-hidden="true">Contact Us</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-small" aria-hidden="true"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"></path></svg></div>
              </div>
                <div className="blogs-card-visual" aria-hidden="true"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0ea2bf4c64ce8c7dcdc3_Frame%201321316127.webp" loading="lazy" alt="" sizes="100vw" srcSet="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0ea2bf4c64ce8c7dcdc3_Frame%201321316127-p-500.webp 500w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0ea2bf4c64ce8c7dcdc3_Frame%201321316127-p-800.webp 800w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0ea2bf4c64ce8c7dcdc3_Frame%201321316127-p-1080.webp 1080w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0ea2bf4c64ce8c7dcdc3_Frame%201321316127-p-1600.webp 1600w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0ea2bf4c64ce8c7dcdc3_Frame%201321316127.webp 2280w" className="img" aria-hidden="true" /></div>
              </a></div>
              </div>
              </div>
              </div>
              <div className="slide w-slide" aria-label="6 of 9" role="group" style={{ "transition": "all", "transform": "translateX(0px)", "opacity": "1" }} aria-hidden="true"><div className="w-dyn-list" aria-hidden="true"><div role="list" className="w-dyn-items" aria-hidden="true"><div role="listitem" className="w-dyn-item" aria-hidden="true"><a href="/blogs/why-regular-deep-cleaning-is-essential-for-businesses" className="blogs_card w-inline-block" tabIndex={-1} aria-hidden="true"><div className="blogs-card-content" aria-hidden="true"><div className="blogs-card-badge" aria-hidden="true"><div className="badge-primary" aria-hidden="true"><div className="text-xs text-color-blue" aria-hidden="true">Business cleaning</div>
              </div>
              </div>
                <div className="blogs-card-text" aria-hidden="true"><div className="blogs-card-title" aria-hidden="true"><h3 className="text-2xl text-style-pretty" aria-hidden="true">Why Regular Deep Cleaning is Essential for Businesses</h3></div>
                  <div className="text-base text-color-secondary text-lineheight-3xl" aria-hidden="true">In today’s world, maintaining a clean home doesn’t have to come at the expense of the environment.</div>
                </div>
                <div className="blog-slider_card-link" aria-hidden="true"><div className="text-base text-weight-bold is-categories-card-link" aria-hidden="true">Contact Us</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-small" aria-hidden="true"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"></path></svg></div>
              </div>
                <div className="blogs-card-visual" aria-hidden="true"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0f391d8dd522316dacd8_Rectangle%2039.webp" loading="lazy" alt="" sizes="100vw" srcSet="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0f391d8dd522316dacd8_Rectangle%2039-p-500.webp 500w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0f391d8dd522316dacd8_Rectangle%2039-p-800.webp 800w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0f391d8dd522316dacd8_Rectangle%2039-p-1080.webp 1080w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0f391d8dd522316dacd8_Rectangle%2039-p-1600.webp 1600w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0f391d8dd522316dacd8_Rectangle%2039-p-2000.webp 2000w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0f391d8dd522316dacd8_Rectangle%2039.webp 2275w" className="img" aria-hidden="true" /></div>
              </a></div>
              </div>
              </div>
              </div>
              <div className="slide w-slide" aria-label="7 of 9" role="group" style={{ "transition": "all", "transform": "translateX(0px)", "opacity": "1" }} aria-hidden="true"><div className="w-dyn-list" aria-hidden="true"><div role="list" className="w-dyn-items" aria-hidden="true"><div role="listitem" className="w-dyn-item" aria-hidden="true"><a href="/blogs/the-role-of-cleaning-in-health-and-safety-standards" className="blogs_card w-inline-block" tabIndex={-1} aria-hidden="true"><div className="blogs-card-content" aria-hidden="true"><div className="blogs-card-badge" aria-hidden="true"><div className="badge-primary" aria-hidden="true"><div className="text-xs text-color-blue" aria-hidden="true">Business cleaning</div>
              </div>
              </div>
                <div className="blogs-card-text" aria-hidden="true"><div className="blogs-card-title" aria-hidden="true"><h3 className="text-2xl text-style-pretty" aria-hidden="true">The Role of Cleaning in Health and Safety Standards</h3></div>
                  <div className="text-base text-color-secondary text-lineheight-3xl" aria-hidden="true">In today’s world, maintaining a clean home doesn’t have to come at the expense of the environment.</div>
                </div>
                <div className="blog-slider_card-link" aria-hidden="true"><div className="text-base text-weight-bold is-categories-card-link" aria-hidden="true">Contact Us</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-small" aria-hidden="true"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"></path></svg></div>
              </div>
                <div className="blogs-card-visual" aria-hidden="true"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0ff60baeb5fe6b315ca5_Frame%201321316129.webp" loading="lazy" alt="" sizes="100vw" srcSet="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0ff60baeb5fe6b315ca5_Frame%201321316129-p-500.webp 500w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0ff60baeb5fe6b315ca5_Frame%201321316129-p-800.webp 800w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0ff60baeb5fe6b315ca5_Frame%201321316129-p-1080.webp 1080w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0ff60baeb5fe6b315ca5_Frame%201321316129-p-1600.webp 1600w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d0ff60baeb5fe6b315ca5_Frame%201321316129.webp 2280w" className="img" aria-hidden="true" /></div>
              </a></div>
              </div>
              </div>
              </div>
              <div className="slide w-slide" aria-label="8 of 9" role="group" style={{ "transition": "all", "transform": "translateX(0px)", "opacity": "1" }} aria-hidden="true"><div className="w-dyn-list" aria-hidden="true"><div role="list" className="w-dyn-items" aria-hidden="true"><div role="listitem" className="w-dyn-item" aria-hidden="true"><a href="/blogs/upcoming-changes-in-cleaning-industry-regulations" className="blogs_card w-inline-block" tabIndex={-1} aria-hidden="true"><div className="blogs-card-content" aria-hidden="true"><div className="blogs-card-badge" aria-hidden="true"><div className="badge-primary" aria-hidden="true"><div className="text-xs text-color-blue" aria-hidden="true">Business cleaning</div>
              </div>
              </div>
                <div className="blogs-card-text" aria-hidden="true"><div className="blogs-card-title" aria-hidden="true"><h3 className="text-2xl text-style-pretty" aria-hidden="true">Upcoming Changes in Cleaning Industry Regulations</h3></div>
                  <div className="text-base text-color-secondary text-lineheight-3xl" aria-hidden="true">In today’s world, maintaining a clean home doesn’t have to come at the expense of the environment.</div>
                </div>
                <div className="blog-slider_card-link" aria-hidden="true"><div className="text-base text-weight-bold is-categories-card-link" aria-hidden="true">Contact Us</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-small" aria-hidden="true"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"></path></svg></div>
              </div>
                <div className="blogs-card-visual" aria-hidden="true"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d10918882d8f71254718b_Frame%201321316130.webp" loading="lazy" alt="" sizes="100vw" srcSet="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d10918882d8f71254718b_Frame%201321316130-p-500.webp 500w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d10918882d8f71254718b_Frame%201321316130-p-800.webp 800w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d10918882d8f71254718b_Frame%201321316130-p-1080.webp 1080w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d10918882d8f71254718b_Frame%201321316130-p-1600.webp 1600w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d10918882d8f71254718b_Frame%201321316130-p-2000.webp 2000w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d10918882d8f71254718b_Frame%201321316130.webp 2280w" className="img" aria-hidden="true" /></div>
              </a></div>
              </div>
              </div>
              </div>
              <div className="slide w-slide" aria-label="9 of 9" role="group" style={{ "transition": "all", "transform": "translateX(0px)", "opacity": "1" }} aria-hidden="true"><div className="w-dyn-list" aria-hidden="true"><div role="list" className="w-dyn-items" aria-hidden="true"><div role="listitem" className="w-dyn-item" aria-hidden="true"><a href="/blogs/client-spotlight-how-our-business-cleaning-service-transformed" className="blogs_card w-inline-block" tabIndex={-1} aria-hidden="true"><div className="blogs-card-content" aria-hidden="true"><div className="blogs-card-badge" aria-hidden="true"><div className="badge-primary" aria-hidden="true"><div className="text-xs text-color-blue" aria-hidden="true">Business cleaning</div>
              </div>
              </div>
                <div className="blogs-card-text" aria-hidden="true"><div className="blogs-card-title" aria-hidden="true"><h3 className="text-2xl text-style-pretty" aria-hidden="true">Client Spotlight: How Our Business Cleaning Service Transformed</h3></div>
                  <div className="text-base text-color-secondary text-lineheight-3xl" aria-hidden="true">In today’s world, maintaining a clean home doesn’t have to come at the expense of the environment.</div>
                </div>
                <div className="blog-slider_card-link" aria-hidden="true"><div className="text-base text-weight-bold is-categories-card-link" aria-hidden="true">Contact Us</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-small" aria-hidden="true"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"></path></svg></div>
              </div>
                <div className="blogs-card-visual" aria-hidden="true"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d12ca39d2f96aee521ea9_Rectangle%2039.webp" loading="lazy" alt="" sizes="100vw" srcSet="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d12ca39d2f96aee521ea9_Rectangle%2039-p-500.webp 500w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d12ca39d2f96aee521ea9_Rectangle%2039-p-800.webp 800w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d12ca39d2f96aee521ea9_Rectangle%2039-p-1080.webp 1080w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d12ca39d2f96aee521ea9_Rectangle%2039-p-1600.webp 1600w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d12ca39d2f96aee521ea9_Rectangle%2039-p-2000.webp 2000w, https://cdn.prod.website-files.com/67318cb9b838c7d9b22e883a/673d12ca39d2f96aee521ea9_Rectangle%2039.webp 2259w" className="img" aria-hidden="true" /></div>
              </a></div>
              </div>
              </div>
              </div>
              <div aria-live="off" aria-atomic="true" className="w-slider-aria-label" data-wf-ignore="">Slide 1 of 9.</div>
            </div>
            <div className="slider-shadow-left"></div>
            <div className="slider-shadow-right"></div>
            <div className="arrow w-slider-arrow-left" role="button" tabIndex={0} aria-controls="w-slider-mask-0" aria-label="previous slide"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-main"><path d="M10.5 19.5L11.5575 18.4425L5.8725 12.75H21V11.25H5.8725L11.5575 5.5575L10.5 4.5L3 12L10.5 19.5Z" fill="currentColor"></path></svg></div>
            <div className="arrow is-right w-slider-arrow-right" role="button" tabIndex={0} aria-controls="w-slider-mask-0" aria-label="next slide"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="icon-1x1-main"><path d="M13.5 19.5L12.4425 18.4425L18.1275 12.75H3V11.25H18.1275L12.4425 5.5575L13.5 4.5L21 12L13.5 19.5Z" fill="currentColor"></path></svg></div>
            <div className="hide w-slider-nav w-round"><div className="w-slider-dot w-active" data-wf-ignore="" aria-label="Show slide 1 of 9" aria-pressed="true" role="button" tabIndex={0} style={{ "marginLeft": "3px", "marginRight": "3px" }}></div>
              <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 2 of 9" aria-pressed="false" role="button" tabIndex={-1} style={{ "marginLeft": "3px", "marginRight": "3px" }}></div>
              <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 3 of 9" aria-pressed="false" role="button" tabIndex={-1} style={{ "marginLeft": "3px", "marginRight": "3px" }}></div>
              <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 4 of 9" aria-pressed="false" role="button" tabIndex={-1} style={{ "marginLeft": "3px", "marginRight": "3px" }}></div>
              <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 5 of 9" aria-pressed="false" role="button" tabIndex={-1} style={{ "marginLeft": "3px", "marginRight": "3px" }}></div>
              <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 6 of 9" aria-pressed="false" role="button" tabIndex={-1} style={{ "marginLeft": "3px", "marginRight": "3px" }}></div>
              <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 7 of 9" aria-pressed="false" role="button" tabIndex={-1} style={{ "marginLeft": "3px", "marginRight": "3px" }}></div>
              <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 8 of 9" aria-pressed="false" role="button" tabIndex={-1} style={{ "marginLeft": "3px", "marginRight": "3px" }}></div>
              <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 9 of 9" aria-pressed="false" role="button" tabIndex={-1} style={{ "marginLeft": "3px", "marginRight": "3px" }}></div>
            </div>
          </div>
        </div>
        </div>
        </div>
        </section> */}
        <FAQ></FAQ>
      </main>
      <Footer />
    </div >
  );
}