"use client"
import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


export default function Home() {
    const imgSrc = [
        "https://shub.edu.vn/images/landing/ver3/image-section/carousel1.png",
        "https://shub.edu.vn/images/landing/ver3/image-section/carousel2.png",
        "https://shub.edu.vn/images/landing/ver3/image-section/carousel3.png",
        "https://shub.edu.vn/images/landing/ver3/image-section/carousel4.png",
        "https://shub.edu.vn/images/landing/ver3/image-section/carousel5.png",
        "https://shub.edu.vn/images/landing/ver3/image-section/carousel6.png",
        "https://shub.edu.vn/images/landing/ver3/image-section/carousel1.png",
        "https://shub.edu.vn/images/landing/ver3/image-section/carousel2.png",
        "https://shub.edu.vn/images/landing/ver3/image-section/carousel3.png",
        "https://shub.edu.vn/images/landing/ver3/image-section/carousel4.png",
        "https://shub.edu.vn/images/landing/ver3/image-section/carousel5.png",
        "https://shub.edu.vn/images/landing/ver3/image-section/carousel6.png",
    ]
    return (
        <main className={"px-6"}>
            <div className={"w-full flex flex-col items-center justify-center mt-20"}>
                <div className={"mb-[55px] flex flex-col justify-center items-center w-2/3"}>
                    <div className={"w-14 h-14"}>
                        <img
                            src="https://shub.edu.vn/_next/image?url=%2Fimages%2Flanding%2Fver3%2Fimage-section%2Fnetworking.gif&w=128&q=75"
                            alt="SHub Classroom"
                        />
                    </div>
                    <p className={"mt-3.5 mb-6 text-center font-semibold text-3xl font-poppins"}>
                        Hoạt động tiêu biểu từ cộng đồng giáo dục
                    </p>
                    <p className={"p-3 text-center text-xl font-poppins text-wrap"}>
                        Hình ảnh được chính những giáo viên từ khắp 3 miền ghi lại
                        trong quá trình giảng dạy, dạy học
                        ứng dụng công nghệ SHub Classroom.
                    </p>
                </div>
                <div className={"w-full px-10"}>
                    <Carousel
                        opts={
                            {
                                align: "start",
                                loop: true,
                            }
                        }
                    >
                        <CarouselContent>
                            {
                                imgSrc.map((src, index) => (
                                    <CarouselItem
                                        key={index}
                                        className={"basis-1/4 md:basis-1/5 lg:basis-1/6"}>
                                        <img
                                            src={src}
                                            alt="SHub Classroom"
                                            className={`${index % 2 === 0 ? "mt-[30px]" : "mb-[30px]"}`}/>
                                    </CarouselItem>
                                ))
                            }
                        </CarouselContent>
                        <CarouselPrevious className={"absolute size-12 drop-shadow-lg left-[-25px]"}/>
                        <CarouselNext
                            className={"absolute size-12 drop-shadow-lg right-[-23px] lg:right-[-22px] xl:right-[-5px]"}/>
                    </Carousel>
                </div>
            </div>
        </main>
    );
}

