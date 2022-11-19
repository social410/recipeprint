import React from 'react'
// import DefaultWrapper from '../layouts/DefaultWrapper'
import { FaLongArrowAltRight, FaAngleRight} from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import heroImg from '../assets/images/home-img/hero-img.png';
import easyIcon from '../assets/images/home-img/easy-icon.png';
import printerIcon from './../assets/images/home-img/printer-icon.png';
import template from '../assets/images/home-img/template-icon.png';
import about from '../assets/images/home-img/about-section.png';
import print from '../assets/images/home-img/print-section.png';
import banana from '../assets/images/home-img/banana.jpeg';
import beefstew from '../assets/images/home-img/beef-stew.jpeg';
import croissant from '../assets/images/home-img/croissant.jpeg';
import friedRice from '../assets/images/home-img/fried-rice.jpeg';
import rice from '../assets/images/home-img/rice.jpeg';
import singaporean from '../assets/images/home-img/singaporean.jpeg';
import spicyRamen from '../assets/images/home-img/spicy-ramen.jpeg';
import roastedBeef from '../assets/images/home-img/roasted-beef.png';
import avatar1 from '../assets/images/home-img/img1.png';
import avatar2 from '../assets/images/home-img/img2.png';
import avatar3 from '../assets/images/home-img/img3.png';
import avatar4 from '../assets/images/home-img/img4.png';
import avatar5 from '../assets/images/home-img/img5.png';
import avatar6 from '../assets/images/home-img/img6.png';
import avatar7 from '../assets/images/home-img/img7.png';
import avatar8 from '../assets/images/home-img/img8.png';
import cookbook from '../assets/images/home-img/cookbook.png';
import imgcreateAccSection from '../assets/images/home-img/createAcc.png';
import createAccount from '../assets/images/home-img/createaccount.png';
import choosetemplate from '../assets/images/home-img/choose-template.png' 
import generaterecipe from '../assets/images/home-img/generate-recipe.jpeg' 
import createrecipe from '../assets/images/home-img/create-recipe.jpeg' 

const Index = () => {
    return (
        // <DefaultWrapper>
            <div className="bg-[#FBFCFE]">
                <HeroSection />
                <Counter />
                <Offer />
                <HowItWork />
                <About />
                <Print />
                <Popular />
                <CookBook />
                <CreateAcc />
            </div>
        // </DefaultWrapper>
    )
}

const HeroSection = ()=> {
  return (
      <section className="hero pb-10 pt-20">
          <div className="lg:flex lg:items-center w-[90%] mx-auto">
              <div className="lg:w-1/2 lg:pr-10 mb-5">
                  <h1 className="font-bold text-black text-xl pb-5 md:text-3xl md:pr-28 lg:text-4xl lg:pr-0 lg:pb-10">
                      The Best Platform To Get Your Customized Recipe Card{' '}
                  </h1>
                  <p className="pb-5 lg:pb-10 text-lg text-black font-normal">
                      Customize your favourite food recipe and have them printed
                      in a beautiful well generated A4 paper.
                  </p>
                  <div className=" items-center gap-5 hidden lg:flex">
                      <div className="">
                          <a
                              className="px-5 py-3 border-2 rounded-md border-orange gap-2 flex items-center bg-orange text-white font-semibold tracking-wide hover:bg-transparent hover:text-orange"
                              href=""
                          >
                              Get started <FaLongArrowAltRight />
                          </a>
                      </div>
                      <div className=" md:block">
                          <a
                              className="px-5 py-3 border border-orange flex text-orange font-semibold tracking-wide hover:text-white hover:bg-orange"
                              href=""
                          >
                              View Various Recipes
                          </a>
                      </div>
                  </div>
              </div>
              <div className="lg:w-1/2">
                  <img src={heroImg} alt="" className="mb-10 w-full" />
                  <div className="flex items-center gap-5 lg:hidden">
                      <div className="">
                          <a
                              className="px-5 py-3 border-2 rounded-md border-orange gap-2 flex items-center bg-orange text-white font-semibold tracking-wide hover:bg-transparent hover:text-orange transition-all"
                              href=""
                          >
                              Get started <FaLongArrowAltRight />
                          </a>
                      </div>
                      <div className=" hidden md:block">
                          <a
                              className="px-5 py-3 border border-orange flex text-orange font-semibold tracking-wide hover:text-white hover:bg-orange"
                              href=""
                          >
                              View Varius Recipe
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

const Counter = ()=> {
  return (
      <section className="bg-orange">
          <div className="flex mx-auto justify-between py-5 w-[90%] lg:w-3/5">
              <div className="text-center">
                  <h2 className='font-bold text-white text-xl md:text-2xl lg:text-3xl'>150+</h2>
                  <p className='text-xs lg:text-xl text-white'>Registered Members</p>
              </div>
              <div className="text-center">
                  <h2 className='font-bold text-white text-xl md:text-2xl lg:text-3xl'>50+</h2>
                  <p className='text-xs lg:text-xl text-white'>Templates</p>
              </div>
              <div className="text-center ">
                  <h2 className='font-bold text-white text-xl md:text-2xl lg:text-3xl' >200+</h2>
                  <p className='text-xs lg:text-xl text-white'>Printed Recipe Cards</p>
              </div>
          </div>
      </section>
  )
}

const Offer = ()=> {
  return (
      <section>
          <div className="w-[90%] mx-auto py-20">
              <h2 className="text-xl md:text-2xl font-bold pb-10">
                  What we offer at Kitchen
                  <span className="text-orange">Diary</span>
              </h2>
              <div className="flex flex-col md:flex-row md:gap-5 lg:gap-10">
                  <div className="border flex-1 rounded-md p-5 mb-5  flex flex-col justify-between">
                      <div>
                          <img src={easyIcon} alt="" className="mb-4" />
                      </div>
                      <h3 className="font-bold text-black text-xl md:text-base lg:text-xl mb-3">
                          {' '}
                          Easy use of access
                      </h3>
                      <p className="text-black mb-3">
                          KitchenDiary is a user-friendly webapp that generates
                          printable recipe cards.
                      </p>
                      <a
                          className="text-orange font-semibold inline-flex items-center gap-1 hover:opacity-50"
                          href=""
                      >
                          Get Started <FaAngleRight />
                      </a>
                  </div>
                  <div className="border flex-1 rounded-md p-5 mb-5 flex flex-col justify-between">
                      <div>
                        <img src={template} alt="" className="mb-4" />
                      </div>
                      <h3 className="font-bold text-black text-xl md:text-base lg:text-xl mb-3">
                          Varieties of template
                      </h3>
                      <p className="text-black mb-3 font-normal">
                          Get access to varieties of A4 recipe card templates
                          from KitchenDiary.
                      </p>
                      <a
                          className="text-orange font-semibold inline-flex items-center gap-1 hover:opacity-50"
                          href=""
                      >
                          Get Started <FaAngleRight />
                      </a>
                  </div>
                  <div className="border flex-1 rounded-md p-5 mb-5 flex flex-col justify-between">
                      <div>
                        <img src={printerIcon} alt="" className="mb-4" />
                      </div>
                      <h3 className="font-bold text-black text-xl md:text-base lg:text-xl mb-3">
                          Printable recipe
                      </h3>
                      <p className="text-black mb-3">
                          Print generated customized food recipe card from from Kitchen Diary
                      </p>
                      <a
                          className="text-orange font-semibold inline-flex items-center gap-1 hover:opacity-50"
                          href=""
                      >
                          Get Started <FaAngleRight />
                      </a>
                  </div>
              </div>
          </div>
      </section>
  )
}

const HowItWork = ()=>{
    return (
        <section>
            <div className="w-4/5 md:w-[90%] lg:w-4/5 mx-auto mb-20">
                <div className="text-center mb-10">
                    <p className="text-brown font-bold text-xl pb-5">
                        How it works
                    </p>
                    <h4 className="text-black font-bold text-xl md:text-2xl lg:text-3xl">
                        Get Started with these Four Easy Steps
                    </h4>
                </div>
                <ul className="home-list">
                    <li className="home-list-item md:flex mb-5 justify-between md:p-0">
                        <div className="md:w-1/2 h-[200px] mb-5 md:pr-20 md:border-r md:border-dashed md:border-black">
                            <img
                                className="w-full h-full object-cover"
                                src={createAccount}
                                alt=""
                            />
                        </div>
                        <div className="md:w-1/2 md:text-sm md:pl-20">
                            <h6 className="font-bold mb-5 lg:text-xl">
                                Create an Account
                            </h6>
                            <p className="text-xl">
                                Click on “Sign Up” to create an account with us
                                or click “Login” to access your account. Then on
                                your dashboard click on “Create Recipe” to get
                                started.
                            </p>
                        </div>
                    </li>
                    <li className="home-list-item md:flex mb-5 md:flex-row-reverse justify-between md:p-0">
                        <div className="md:w-1/2 h-[200px] mb-5 md:pl-20 md:border-l md:border-dashed md:border-black">
                            <img
                                className="w-full h-full object-cover"
                                src={choosetemplate}
                                alt=""
                            />
                        </div>
                        <div className="md:w-1/2 md:pr-20">
                            <h6 className="font-bold mb-5 text-xl">
                                Choose Template
                            </h6>
                            <p className="md:text-xl">
                                Click “create recipe” to get started, then fill
                                the interactive form Page to add recipe your
                                title, subtitle, and description of recipe.
                            </p>
                        </div>
                    </li>
                    <li className="home-list-item md:flex mb-10 justify-between md:p-0">
                        <div className="md:w-1/2 h-[200px] mb-5 md:pr-20">
                            <img
                                className="w-full h-full object-cover"
                                src={createrecipe}
                                alt=""
                            />
                        </div>
                        <div className="md:w-1/2 md:pl-20 md:border-l md:border-dashed md:border-black">
                            <h6 className="font-bold mb-5 text-xl">
                                Create Recipe Card
                            </h6>
                            <p className="lg:text-xl">
                                After choosing a template, you then proceed to
                                fill the interactive form Page to add your
                                recipe title, ingredients etc to make your
                                recipe card.
                            </p>
                        </div>
                    </li>
                    <li className="home-list-item md:flex mb-10 md:flex-row-reverse justify-between md:p-0">
                        <div className="md:w-1/2 h-[200px] mb-5 md:pl-20">
                            <img
                                className="w-full h-full object-cover"
                                src={generaterecipe}
                                alt=""
                            />
                        </div>
                        <div className="md:w-1/2 md:pr-20 md:border-dash md:border-r md:border-dashed border-black">
                            <h6 className="font-bold mb-5 text-xl">
                                Generate Recipe Card
                            </h6>
                            <p className="lg:text-xl">
                                Download your recipe in a well generated
                                beautiful A4 paper and you’re good to go.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

const About = ()=> {
  return (
      <section className="mb-10">
          <div className="container lg:flex lg:items-center w-4/5 mx-auto">
              <div className="lg:w-1/2 lg:pr-10">
                  <p className="text-brown font-bold text-xl mb-1">About Us</p>
                  <h3 className='text-black font-bold text-2xl mb-5'>Who We Are?</h3>
                  <p className='mb-auto pb-10 lg:pb-20 md:text-xl'>
                      We allow user to design recipes with information such as
                      the name of the food, the ingredients, cooking
                      instructions, and supporting images. We use this
                      information to generate a customizable and printable card
                      for the user in A4 Paper.
                  </p>
                  <a className="hidden items-center lg:inline-flex gap-3 bg-orange text-white px-5 py-3 rounded-md font-semibold hover:opacity-50"  href="">
                      Read More <FaLongArrowAltRight />
                  </a>
              </div>
              <div className="relative lg:w-1/2">
                  <div className="absolute w-20 h-20 bg-lightOrange right-0 top-0"></div>
                  <div className="absolute w-20 h-20 bg-lightOrange left-0 bottom-0"></div>
                  <div className="text-center">
                      <img
                          src={about}
                          alt=""
                          className="w-full scale-90 object-cover"
                      />
                  </div>
              </div>
              <a className="inline-flex items-center lg:hidden gap-3 bg-orange text-white px-6 py-3 mt-10 rounded-md font-semibold hover:opacity-50" href="">
                  Read More <FaLongArrowAltRight />
              </a>
          </div>
      </section>
  )
}

const Print = ()=> {
 return (
     <section className="print min-h-screen py-10">
         <div className="flex flex-col items-center space-y-10  w-[90%] mx-auto">
             <div className="text-white lg:text-center">
                 <h3 className="font-bold text-3xl mb-5">
                     Looking for a printable recipe card template?
                 </h3>
                 <p className="text-xl">
                     Our recipe card templates are perfect for organizing your
                     recipes and keeping them tidy.
                 </p>
             </div>
             <div>
                 <img src={print} alt="" />
             </div>
             <div className="">
                 <a
                     className="py-3 px-6 text-white block font-semibold bg-orange rounded-sm hover:opacity-50"
                     href=""
                 >
                     Create your own Recipe Card
                 </a>
             </div>
         </div>
     </section>
 )
}

const Popular = ()=> { 
  return (
      <section>
          <div className="w-[90%] mx-auto py-20">
              <div className="flex justify-between items-center pb-10">
                  <h3 className="text-2xl md:text-3xl font-bold ">
                      Popular recipes from <br className="lg:hidden" />
                      Kitchen<span className="text-orange">Diary</span>
                  </h3>
                  <a className="text-orange font-semibold" href="">
                      See all
                  </a>
              </div>
              <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-4">
                  <div className="card bg-white rounded-b-md rounded-t-xl">
                      <div className="w-full h-[150px] mb-5">
                          <img
                              className="w-full h-full object-cover rounded-t-xl"
                              src={banana}
                              alt=""
                          />
                      </div>
                      <div className="flex  items-center px-2 pb-2">
                          <div className="w-[40px] mr-2">
                              <img
                                  className="rounded-full"
                                  src={avatar1}
                                  alt=""
                              />
                          </div>
                          <div className="info ">
                              <h5 className="font-bold md:text-sm">
                                  Banana Pancake
                              </h5>
                              <p className="text-sm">Anuolu Kuye</p>
                          </div>
                          <div className="flex gap-2 items-center ml-auto">
                              <FiHeart className="text-orange" />
                              <p>120</p>
                          </div>
                      </div>
                  </div>
                  <div className="card bg-white rounded-b-md rounded-t-xl">
                      <div className="w-full h-[150px] mb-5">
                          <img
                              className="w-full h-full object-cover rounded-t-xl"
                              src={rice}
                              alt=""
                          />
                      </div>
                      <div className="flex  items-center px-2 pb-2">
                          <div className="w-[40px] mr-2">
                              <img
                                  className="rounded-full"
                                  src={avatar2}
                                  alt=""
                              />
                          </div>
                          <div className="info ">
                              <h5 className="font-bold md:text-sm">
                                  Rice and Fish Stew
                              </h5>
                              <p className="text-sm">James Steve</p>
                          </div>
                          <div className="flex gap-2 items-center ml-auto">
                              <FiHeart className="text-orange" />
                              <p>120</p>
                          </div>
                      </div>
                  </div>
                  <div className="card bg-white rounded-b-md rounded-t-xl">
                      <div className="w-full h-[150px] mb-5">
                          <img
                              className="w-full h-full object-cover rounded-t-xl"
                              src={friedRice}
                              alt=""
                          />
                      </div>
                      <div className="flex  items-center pb-2 px-2">
                          <div className="w-[40px] mr-2">
                              <img
                                  className="rounded-full"
                                  src={avatar3}
                                  alt=""
                              />
                          </div>
                          <div className="info ">
                              <h5 className="font-bold md:text-sm">
                                  Fried Rice
                              </h5>
                              <p className="text-sm">Richardson Stone</p>
                          </div>
                          <div className="flex gap-2 items-center ml-auto">
                              <FiHeart className="text-orange" />
                              <p>120</p>
                          </div>
                      </div>
                  </div>
                  <div className="card bg-white rounded-b-md rounded-t-xl">
                      <div className="w-full h-[150px] mb-5">
                          <img
                              className="w-full h-full object-cover rounded-t-xl"
                              src={roastedBeef}
                              alt=""
                          />
                      </div>
                      <div className="flex  items-center px-2 pb-2">
                          <div className="w-[40px] mr-2">
                              <img
                                  className="rounded-full"
                                  src={avatar4}
                                  alt=""
                              />
                          </div>
                          <div className="info ">
                              <h5 className="font-bold md:text-sm">
                                  Roasted Beef and Rice
                              </h5>
                              <p className="text-sm">Hannah Drille</p>
                          </div>
                          <div className="flex gap-2 items-center ml-auto">
                              <FiHeart className="text-orange" />
                              <p>120</p>
                          </div>
                      </div>
                  </div>
                  <div className="card bg-white rounded-b-md rounded-t-xl">
                      <div className="w-full h-[150px] mb-5">
                          <img
                              className="w-full h-full object-cover rounded-t-xl"
                              src={beefstew}
                              alt=""
                          />
                      </div>
                      <div className="flex  items-center px-2 pb-2">
                          <div className="w-[40px] mr-2">
                              <img
                                  className="rounded-full"
                                  src={avatar5}
                                  alt=""
                              />
                          </div>
                          <div className="info ">
                              <h5 className="font-bold">Beef Stew</h5>
                              <p className="text-sm">Martina Ngozi</p>
                          </div>
                          <div className="flex gap-2 items-center ml-auto">
                              <FiHeart className="text-orange" />
                              <p>120</p>
                          </div>
                      </div>
                  </div>
                  <div className="card bg-white rounded-b-md rounded-t-xl">
                      <div className="w-full h-[150px] mb-5">
                          <img
                              className="w-full h-full object-cover rounded-t-xl"
                              src={spicyRamen}
                              alt=""
                          />
                      </div>
                      <div className="flex  items-center px-2 pb-2">
                          <div className="w-[40px] mr-2">
                              <img
                                  className="rounded-full"
                                  src={avatar6}
                                  alt=""
                              />
                          </div>
                          <div className="info ">
                              <h5 className="font-bold md:text-sm">
                                  Spicy Ramen Noodles
                              </h5>
                              <p className="text-sm">Howard Suka</p>
                          </div>
                          <div className="flex gap-2 items-center ml-auto">
                              <FiHeart className="text-orange" />
                              <p>120</p>
                          </div>
                      </div>
                  </div>
                  <div className="card bg-white rounded-b-md rounded-t-xl">
                      <div className="w-full h-[150px] mb-5">
                          <img
                              className="w-full h-full object-cover rounded-t-xl"
                              src={croissant}
                              alt=""
                          />
                      </div>
                      <div className="flex  items-center px-2 pb-2">
                          <div className="w-[40px] mr-2">
                              <img
                                  className="rounded-full"
                                  src={avatar7}
                                  alt=""
                              />
                          </div>
                          <div className="info ">
                              <h5 className="font-bold md:text-sm">
                                  {' '}
                                  Croissants{' '}
                              </h5>
                              <p className="text-sm">Richard Duke</p>
                          </div>
                          <div className="flex gap-2 items-center ml-auto">
                              <FiHeart className="text-orange" />
                              <p>120</p>
                          </div>
                      </div>
                  </div>
                  <div className="card bg-white rounded-t-xl rounded-b-md">
                      <div className="w-full h-[150px] mb-5">
                          <img
                              className="w-full h-full object-cover rounded-t-xl"
                              src={singaporean}
                              alt=""
                          />
                      </div>
                      <div className="flex  items-center pb-2 px-2">
                          <div className="w-[40px] mr-2">
                              <img
                                  className="rounded-full"
                                  src={avatar8}
                                  alt=""
                              />
                          </div>
                          <div className="info">
                              <h5 className="font-bold md:text-sm">
                                  Singaporean Noddles
                              </h5>
                              <p className="text-sm">Stephanie Eze</p>
                          </div>
                          <div className="flex gap-2 items-center ml-auto">
                              <FiHeart className="text-orange" />
                              <p>120</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

const CookBook = ()=> {
return (
    <section className="py-20">
        <div className="w-[90%] mx-auto lg:flex items-center">
            <div className="lg:w-1/2 mb-10 pr-7">
                <h3 className='font-bold text-3xl pb-10 '>Get a Recipe Cookbook TODAY!!!</h3>
                <p className='pb-5 md:text-lg'>
                    Looking for a cookbook with recipes that are easy to use?
                    Look no further than our KitchenDiary Cookbooks. Our recipe
                    books has something for everyone, whether you &apos; re a
                    beginner in the kitchen or a seasoned pro
                </p>
                <p className='md:text-lg'>
                    With easy-to-follow instructions and mouthwatering photos,
                    you&apos;ll be whipping up delicious dishes in no time
                </p>
            </div>
            <div className="lg:w-1/2 text-center">
                  <img src={cookbook} alt="" />
                  <a className='text-white font-semibold bg-orange px-6 py-3 mt-10 inline-block hover:opacity-50' href="">Get a recipe book now</a>
            </div>
        </div>
    </section>
)
}

const CreateAcc = ()=> {
    return (
        <section className="bg-lightOrange py-10">
            <div className="lg:w-1/2 mx-auto flex flex-col md:flex-row p-5 lg:p-0 gap-5">

                <img src={imgcreateAccSection} alt="" />
                <div className='flex flex-col justify-between'>
                    <h3 className='font-bold text-xl mb-5 md:text-2xl'>Still yet to create an account?</h3>
                    <p className='mb-5'>
                        Create an acccount now to get access to numerous food recipe
                        templates, and printable food recipe
                    </p>
                    <div>
                       <a className='inline-block bg-orange text-white px-6 py-3 rounded-md hover:opacity-50' href="">Create an Account</a>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Index
