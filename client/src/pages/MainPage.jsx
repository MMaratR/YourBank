import React from 'react'
import { Link } from 'react-router-dom'

import icon from "../images/icon.png"
import full from "../images/full.png"
import icon1 from "../images/icons/icon1.png"
import icon2 from "../images/icons/icon2.png"
import icon3 from "../images/icons/icon3.png"
import icon4 from "../images/icons/icon4.png"
import icon5 from "../images/icons/icon5.png"
import icon6 from "../images/icons/icon6.png"
import icon7 from "../images/icons/icon7.png"
import icon8 from "../images/icons/icon8.png"
import icon9 from "../images/icons/icon9.png"
import icon10 from "../images/icons/icon10.png"
import icon11 from "../images/icons/icon11.png"


export const MainPage = () => {
  return <main class="main">
    <section class="welcome">
      <div class="container">
        <div class="welcome_block">
          <div class="welcome_text">
            <p class="welcome_check">
              <img src={icon} alt="icon"></img>
              No LLC Required, No Credit Check.
            </p>
            <h1 class="welcome_title">
              Welcome to YourBank Empowering Your <span>Financial Journey</span>
            </h1>
            <p class="welcome_paragraph">
              At YourBank, our mission is to provide comprehensive banking solutions that empower
              individualsand businesses to achieve their financial goals. We are committed to delivering personalized
              and innovative services that prioritize our customers' needs.
            </p>
            <Link to={'/register'} class="welcome_button">
              Open Account
            </Link>
          </div>
          <div class="welcome_img">
            <img src={full} alt="full"></img>
          </div>
        </div>
      </div>
    </section>
    <section class="products">
      <div class="container">
        <div class="products_block">
          <div class="products_text">
            <h1 class="products_title">
              Our <span>Products</span>
            </h1>
            <p class="products_paragraph">
              Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your
              unique financial needs and aspirations
            </p>
          </div>
          <ul class="products_list">
            <li><a class="active" href="https://ya.ru/">For Individuals</a></li>
            <li><a href="https://ya.ru/">For Businesses</a></li>
          </ul>
        </div>
        <div class="list_products_block">
          <div class="list_product">
            <img src={icon1} alt="icon1" class="img_product"></img>
            <h3 class="title_product">
              Checking Accounts
            </h3>
            <p class="paragraph_product">
              Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from
              features such as online and mobile banking, debit cards, and free ATM access.
            </p>
          </div>
          <div class="vertical_line"></div>
          <div class="list_product">
            <img src={icon2} alt="icon2" class="img_product"></img>
            <h3 class="title_product">
              Savings Accounts
            </h3>
            <p class="paragraph_product">
              Build your savings with our competitive interest rates and flexible savings account options. Whether
              you're saving for a specific goal or want to grow your wealth over time, we have the right account for
              you.
            </p>
          </div>
          <div class="vertical_line"></div>
          <div class="list_product">
            <img src={icon3} alt="icon3" class="img_product"></img>
            <h3 class="title_product">
              Loans and Mortgages
            </h3>
            <p class="paragraph_product">
              Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages,
              our experienced loan officers are here to guide you through the application process and help you secure
              the funds you need.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="cases">
      <div class="container">
        <div class="cases_text">
          <h1 cases_title>
            <span>Use Cases</span>
          </h1>
          <p class="cases_paragraph">
            At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of
            financial solutions
          </p>
        </div>
        <div class="use_cases_block_1">
          <div class="case_group_1">
            <div class="case_flex">
              <div class="case">
                <img src={icon4} alt="icon4" class="case_img"></img>
                <h4 class="case_title">
                  Managing Personal Finances
                </h4>
              </div>
              <div class="case">
                <img src={icon5} alt="icon5" class="case_img"></img>
                <h4 class="case_title">
                  Saving for the Future
                </h4>
              </div>
            </div>
            <div class="case_flex">
              <div class="case">
                <img src={icon6} alt="icon6" class="case_img"></img>
                <h4 class="case_title">
                  Homeownership
                </h4>
              </div>
              <div class="case">
                <img src={icon7} alt="icon7" class="case_img"></img>
                <h4 class="case_title">
                  Education Funding
                </h4>
              </div>
            </div>
          </div>
          <div class="case_text_1">
            <div class="case_text">
              <h2 class="case_text_title">
                For Individuals
              </h2>
              <p class="case_text_paragraph">
                For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans
                provide vital support during various life milestones. We also prioritize retirement planning, ensuring
                a
                financially secure future for our customers
              </p>
            </div>
            <div class="case_numbers">
              <div class="number_text">
                <p class="number">
                  <span>78%</span>
                </p>
                <p class="text">
                  Secure Retirement Planning
                </p>
              </div>
              <div class="vertical_line"></div>
              <div class="number_text">
                <p class="number">
                  <span>63%</span>
                </p>
                <p class="text">
                  Manageable Debt Consolidation
                </p>
              </div>
              <div class="vertical_line"></div>
              <div class="number_text">
                <p class="number">
                  <span>91%</span>
                </p>
                <p class="text">
                  Reducing financial burdens
                </p>
              </div>
            </div>
            <a href="https://ya.ru/" class="learn_more">Learn More</a>
          </div>
        </div>
        <div class="use_cases_block_2">
          <div class="case_text_2">
            <div class="case_text">
              <h2 class="case_text_title">
                For Business
              </h2>
              <p class="case_text_paragraph">
                For businesses, we empower growth with working capital solutions that optimize cash flow, and our
                tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is
                committed to providing the right tools and support to achieve them
              </p>
            </div>
            <div class="case_numbers">
              <div class="number_text">
                <p class="number">
                  <span>65%</span>
                </p>
                <p class="text">
                  Cash Flow Management
                </p>
              </div>
              <div class="vertical_line"></div>
              <div class="number_text">
                <p class="number">
                  <span>70%</span>
                </p>
                <p class="text">
                  Drive Business Expansion
                </p>
              </div>
              <div class="vertical_line"></div>
              <div class="number_text">
                <p class="number">
                  <span>45%</span>
                </p>
                <p class="text">
                  Streamline payroll processing
                </p>
              </div>
            </div>
            <a href="https://ya.ru/" class="learn_more">Learn More</a>
          </div>
          <div class="case_group_2">
            <div class="case_flex">
              <div class="case">
                <img src={icon8} alt="icon8" class="case_img"></img>
                <h4 class="case_title">
                  Startups and Entrepreneurs
                </h4>
              </div>
              <div class="case">
                <img src={icon9} alt="icon9" class="case_img"></img>
                <h4 class="case_title">
                  Cash Flow Management
                </h4>
              </div>
            </div>
            <div class="case_flex">
              <div class="case">
                <img src={icon10} alt="icon10" class="case_img"></img>
                <h4 class="case_title">
                  Business Expansion
                </h4>
              </div>
              <div class="case">
                <img src={icon11} alt="icon11" class="case_img"></img>
                <h4 class="case_title">
                  Payment Solutions
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
}