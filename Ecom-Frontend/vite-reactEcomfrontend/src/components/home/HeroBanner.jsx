// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules'
import { bannerLists } from '../../utils';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
    return (
        <div className='py-2 rounded-md'>
            <Swiper
                grabCursor={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation
                modules={[Pagination, EffectFade, Navigation, Autoplay]}
                effect="fade"
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                slidesPerView={1}
            >
                {bannerLists.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="relative rounded-md sm:h-[500px] h-96 overflow-hidden">
                            {/* Background image */}
                            <img
                                src={item?.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            {/* Dark gradient overlay for blending */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
                            {/* Content */}
                            <div className="relative z-10 flex items-center h-full px-8 sm:px-16">
                                <div className="max-w-xl">
                                    <h3 className="text-lg sm:text-2xl text-yellow-400 font-semibold tracking-wider uppercase">
                                        {item.title}
                                    </h3>
                                    <h1 className="text-3xl sm:text-5xl text-white font-bold mt-2 leading-tight">
                                        {item.subtitle}
                                    </h1>
                                    <p className="text-gray-200 text-sm sm:text-base mt-4 max-w-md">
                                        {item.description}
                                    </p>
                                    <Link
                                        className="mt-6 inline-block bg-yellow-500 text-black font-bold py-3 px-8 rounded hover:bg-yellow-400 transition-colors duration-200"
                                        to="/products">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HeroBanner;
