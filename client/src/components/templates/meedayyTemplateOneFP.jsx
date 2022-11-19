import React from 'react'
import Potrait from '../../assets/images/medayRecipePotraitImgDesk.svg'
import butter from '../../assets/images/butterFpDvImg.svg'
import brownSugar from '../../assets/images/brownSugarFpDvImg.svg'
import eggs from '../../assets/images/eggsFpDvImg.svg'
import frenchBread from '../../assets/images/frenchBreadFpDvImg.svg'
import whipped from '../../assets/images/whippedIceCreamFpDvImg.svg'
import vanilla from '../../assets/images/vanillaExtractFpDvImg.svg'
import rose from '../../assets/images/roseFpDvImg.svg'

const meedayyTemplateOneFP = () => {
    return (
        <div id="medayyyTemp">
            <div className="flex w-[70%] mx-[Auto]">
                <div className="px-[3%] pt-[7%] bg-[#F4F4F4] basis-[50%]">
                    <div className="mb-[8%]">
                        <h2 className="text-[#000000] text-[18px] text-center font-[400] mb-[3%]">
                            Cinammon baked french toast
                        </h2>
                        <p className="mb-[3%] font-[500] text-[14px] text-[#888888]">
                            Ree Drummond&rsquo;s baked french toast is perfect
                            for brunch or any special weekend breakfast.
                        </p>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h6 className="text-[14px] text-[#7170BE] font-[500]">
                                PREP TIME
                            </h6>
                            <p className="text-[#888888] font-[500] mb-[2.5%] text-[12px] mt-[8px]">
                                15 minutes
                            </p>
                        </div>
                        <div>
                            <h6 className="text-[14px] text-[#7170BE] font-[500]">
                                COOK TIME
                            </h6>
                            <p className="text-[#888888] font-[500] mb-[2.5%] text-[12px] mt-[8px]">
                                45 minutes
                            </p>
                        </div>
                        <div>
                            <h6 className="text-[14px] text-[#7170BE] font-[500]">
                                SERVING
                            </h6>
                            <p className="text-[#888888] font-[500] mb-[2.5%] text-[12px] mt-[8px]">
                                12 people
                            </p>
                        </div>
                    </div>
                    <h3 className="font-[500] text-[#7170BE] text-[14px] mt-[8%]">
                        INGREDIENTS
                    </h3>
                    <h4 className="font-[600] text-[#353535] text-[12px] mt-[4%]">
                        French toast
                    </h4>
                    <div className="flex justify-between">
                        <div className="pl-[2%] basis-[45%]">
                            <p className="text-[12px] font-[500] text-[#888888] mt-[8px]">
                                . Butter, for greasing
                            </p>
                            <p className="text-[12px] font-[500] text-[#888888] mt-[8px]">
                                . 1 loaf crusty sourdough or French bread
                            </p>
                            <p className="text-[12px] font-[500] text-[#888888] mt-[8px]">
                                . 8 whole eggs
                            </p>
                            <p className="text-[12px] font-[500] text-[#888888] mt-[8px]">
                                . 1/2 cup whipping (heavy) cream
                            </p>
                            <p className="text-[12px] font-[500] text-[#888888] mt-[8px]">
                                . 1/2 cup granulated sugar
                            </p>
                            <p className="text-[12px] font-[500] text-[#888888] mt-[8px]">
                                . 1/2 cup brown sugar
                            </p>
                            <p className="text-[12px] font-[500] text-[#888888] mt-[8px]">
                                . 2 tablespoons vanilla extract
                            </p>
                            <p className="text-[12px] font-[500] text-[#888888] mt-[8px]">
                                . 2 cups of whole milk
                            </p>
                        </div>
                        <div className="basis-[55%]">
                            <div className="flex justify-between mb-[15px]">
                                <div>
                                    <img src={butter} alt={butter} />
                                    <h6 className="text-[12px] text-center text-[#888888] font-[500] mt-[5px]">
                                        Butter
                                    </h6>
                                </div>
                                <div>
                                    <img src={brownSugar} alt={brownSugar} />
                                    <h6 className="text-[12px] text-center text-[#888888] font-[500] mt-[5px]">
                                        Brown sugar
                                    </h6>
                                </div>
                            </div>
                            <div className="flex justify-between  mb-[15px]">
                                <div>
                                    <img src={eggs} alt={eggs} />
                                    <h6 className="text-[12px] text-center text-[#888888] font-[500] mt-[5px]">
                                        Eggs
                                    </h6>
                                </div>
                                <div>
                                    <img src={frenchBread} alt={frenchBread} />
                                    <h6 className="text-[12px] text-center text-[#888888] font-[500] mt-[5px]">
                                        French bread
                                    </h6>
                                </div>
                            </div>
                            <div className="flex justify-between  mb-[15px]">
                                <div>
                                    <img src={whipped} alt={whipped} />
                                    <h6 className="text-[12px] text-[#888888] font-[500] mt-[5px]">
                                        Whipped ice cream
                                    </h6>
                                </div>
                                <div>
                                    <img src={vanilla} alt={vanilla} />
                                    <h6 className="text-[12px]  text-[#888888] font-[500] mt-[5px]">
                                        Vanilla extract
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" mt-[10px]">
                        <img className="mx-[auto]" src={rose} alt={rose} />
                    </div>
                </div>
                <div className="basis-[50%]"> 
                    <div className="h-[100Vh] ">
                        <img
                            className="h-[100Vh] object-cover "
                            src={Potrait}
                            alt={Potrait}
                        />
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default meedayyTemplateOneFP;
