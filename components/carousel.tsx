"use client"
import React, { useEffect, useRef } from "react";

export function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let start = performance.now();
    let animationFrameId: number;
    const duration = 20000; // 10秒滚动一轮
    const maxTranslate = 100; // 你原本的 -61.862%

    function animate(now: number) {
      const elapsed = (now - start) % duration;
      const progress = elapsed / duration;
      const translateX = -maxTranslate * progress;

      if (carouselRef.current) {
        carouselRef.current.style.transform = `translate3d(${translateX}%, 0px, 0px)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    }

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);
  return (
    <div className="testimonials_content" style={{
      "transform": "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity": 1, "transformStyle": "preserve-3d"
    }}><div className="testimonials_carousel" ref={carouselRef} style={{
      "transform": "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d", "willChange": "transform"
    }}
    ><div className="testimonials_card"><div className="card-text-wrap"><div className="card-badge"><div className="text-sm">Best customer service</div>
    </div>
      <div className="text-base text-lineheight-2xl text-color-dark-green">The support team at BrightHome is incredibly helpful. They addressed all my concerns quickly and made me feel valued as a customer. My experience has been nothing short of exceptional. Highly recommended!</div>
    </div>
          <div className="card-user-wrap"><div className="card-user-image"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6735116cd07544af68fe009b_testimonials%20user%201.webp" loading="lazy" alt="" className="img" /></div>
            <div className="card-user-information"><div className="text-sm text-color-dark-green text-weight-bold">Sofia Lee</div>
              <div className="text-sm text-color-gray">@sofiale</div>
            </div>
          </div>
        </div>
        <div className="testimonials_card"><div className="card-text-wrap"><div className="card-badge"><div className="text-sm">More accessible platform</div>
        </div>
          <div className="text-base text-lineheight-2xl text-color-dark-green">I’ve tried several cleaning services before, but CleanNest is by far the best. They are thorough, reliable, and always leave my home sparkling clean. I highly recommend them!</div>
        </div>
          <div className="card-user-wrap"><div className="card-user-image"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6735116b9c1e17ef5b9a35ac_testimonials%20user%202.webp" loading="lazy" alt="" className="img" /></div>
            <div className="card-user-information"><div className="text-sm text-color-dark-green text-weight-bold">Emily Rodriguez</div>
              <div className="text-sm text-color-gray">@emilyro</div>
            </div>
          </div>
        </div>
        <div className="testimonials_card"><div className="card-text-wrap"><div className="card-badge"><div className="text-sm">Suggested platform</div>
        </div>
          <div className="text-base text-lineheight-2xl text-color-dark-green">CleanNest has transformed my office space! Their team is professional and pays attention to every detail. I love coming to work in a clean environment. Thank you, CleanNest!</div>
        </div>
          <div className="card-user-wrap"><div className="card-user-image"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6735116b337a432f78ff7cc6_testimonials%20user%203.webp" loading="lazy" alt="" className="img" /></div>
            <div className="card-user-information"><div className="text-sm text-color-dark-green text-weight-bold">Samantha Lee</div>
              <div className="text-sm text-color-gray">@samlee</div>
            </div>
          </div>
        </div>
        <div className="testimonials_card"><div className="card-text-wrap"><div className="card-badge"><div className="text-sm">Truly dependable service</div>
        </div>
          <div className="text-base text-lineheight-2xl text-color-dark-green">I can’t express how happy I am with CleanNest! The staff is friendly, and they always accommodate my schedule. My home feels fresh and organized after each visit. Definitely a five-star service!</div>
        </div>
          <div className="card-user-wrap"><div className="card-user-image"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6735116bde42b807d4eb311b_testimonials%20user%204.webp" loading="lazy" alt="" className="img" /></div>
            <div className="card-user-information"><div className="text-sm text-color-dark-green text-weight-bold">Carlos Martinez</div>
              <div className="text-sm text-color-gray">@carlosma</div>
            </div>
          </div>
        </div>
        <div className="testimonials_card"><div className="card-text-wrap"><div className="card-badge"><div className="text-sm">More reliable than ever</div>
        </div>
          <div className="text-base text-lineheight-2xl text-color-dark-green">I've used several delivery services in the past, but QuickShip has surpassed my expectations. They’re punctual, easy to communicate with, and my packages always arrive in perfect condition. Couldn’t ask for a better service!</div>
        </div>
          <div className="card-user-wrap"><div className="card-user-image"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6735116b9e9b9fece4643a21_testimonials%20user%205.webp" loading="lazy" alt="" className="img" /></div>
            <div className="card-user-information"><div className="text-sm text-color-dark-green text-weight-bold">Alex Martinez</div>
              <div className="text-sm text-color-gray">@amartinez</div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials_carousel"  style={{
        "transform": "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d", "willChange": "transform"
      }}
      ><div className="testimonials_card"><div className="card-text-wrap"><div className="card-badge"><div className="text-sm">Best customer service</div>
      </div>
        <div className="text-base text-color-dark-green">The support team at BrightHome is incredibly helpful. They addressed all my concerns quickly and made me feel valued as a customer. My experience has been nothing short of exceptional. Highly recommended!</div>
      </div>
          <div className="card-user-wrap"><div className="card-user-image"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6735116cd07544af68fe009b_testimonials%20user%201.webp" loading="lazy" alt="" className="img" /></div>
            <div className="card-user-information"><div className="text-sm text-color-dark-green text-weight-bold">Sofia Lee</div>
              <div className="text-sm text-color-gray">@sofiale</div>
            </div>
          </div>
        </div>
        <div className="testimonials_card"><div className="card-text-wrap"><div className="card-badge"><div className="text-sm">More accessible platform</div>
        </div>
          <div className="text-base text-color-dark-green">I’ve tried several cleaning services before, but CleanNest is by far the best. They are thorough, reliable, and always leave my home sparkling clean. I highly recommend them!</div>
        </div>
          <div className="card-user-wrap"><div className="card-user-image"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6735116b9c1e17ef5b9a35ac_testimonials%20user%202.webp" loading="lazy" alt="" className="img" /></div>
            <div className="card-user-information"><div className="text-sm text-color-dark-green text-weight-bold">Emily Rodriguez</div>
              <div className="text-sm text-color-gray">@emilyro</div>
            </div>
          </div>
        </div>
        <div className="testimonials_card"><div className="card-text-wrap"><div className="card-badge"><div className="text-sm">Suggested platform</div>
        </div>
          <div className="text-base text-color-dark-green">CleanNest has transformed my office space! Their team is professional and pays attention to every detail. I love coming to work in a clean environment. Thank you, CleanNest!</div>
        </div>
          <div className="card-user-wrap"><div className="card-user-image"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6735116b337a432f78ff7cc6_testimonials%20user%203.webp" loading="lazy" alt="" className="img" /></div>
            <div className="card-user-information"><div className="text-sm text-color-dark-green text-weight-bold">Samantha Lee</div>
              <div className="text-sm text-color-gray">@samlee</div>
            </div>
          </div>
        </div>
        <div className="testimonials_card"><div className="card-text-wrap"><div className="card-badge"><div className="text-sm">Truly dependable service</div>
        </div>
          <div className="text-base text-color-dark-green">I can’t express how happy I am with CleanNest! The staff is friendly, and they always accommodate my schedule. My home feels fresh and organized after each visit. Definitely a five-star service!</div>
        </div>
          <div className="card-user-wrap"><div className="card-user-image"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6735116bde42b807d4eb311b_testimonials%20user%204.webp" loading="lazy" alt="" className="img" /></div>
            <div className="card-user-information"><div className="text-sm text-color-dark-green text-weight-bold">Carlos Martinez</div>
              <div className="text-sm text-color-gray">@carlosma</div>
            </div>
          </div>
        </div>
        <div className="testimonials_card"><div className="card-text-wrap"><div className="card-badge"><div className="text-sm">More reliable than ever</div>
        </div>
          <div className="text-base text-color-dark-green">I've used several delivery services in the past, but QuickShip has surpassed my expectations. They’re punctual, easy to communicate with, and my packages always arrive in perfect condition. Couldn’t ask for a better service!</div>
        </div>
          <div className="card-user-wrap"><div className="card-user-image"><img src="https://cdn.prod.website-files.com/67318cb9b838c7d9b22e8814/6735116b9e9b9fece4643a21_testimonials%20user%205.webp" loading="lazy" alt="" className="img" /></div>
            <div className="card-user-information"><div className="text-sm text-color-dark-green text-weight-bold">Alex Martinez</div>
              <div className="text-sm text-color-gray">@amartinez</div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials_shadow-right"></div>
      <div className="testimonials_shadow-left"></div>
    </div>
  )
}