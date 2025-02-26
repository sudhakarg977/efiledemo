import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
//import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "I was looking for a trusted group for my ITR support. The team is doing a great job. One of my friends referred me to efiletax.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Aadil Ahmed",
    role: "CEO",
  },
  {
    text: "I was looking for a trusted group for my ITR support. The team is doing a great job. One of my friends referred me to efiletax. team is doing a brilliant job in tax filing. They guided me well and helped me to get my amount. They are very friendly.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Prabhu Samuel",
    role: "Manager",
  },
  {
    text: "I was looking for a trusted group for my ITR support. The team is doing a great job. One of my friends referred me to efiletax.-free and prompt tax return filing service. The tax return was filed timely. I also received a good return with very minimal charges.",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
    name: "Rajess KumarT",
    role: "Accountant",
  },
  {
    text: "I was looking for a trusted group for my ITR support. The team is doing a great job. One of my friends referred me to efiletax. service and very professional approach. They made tax filing so easy and quick for me. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    name: "Samantha Brown",
    role: "HR Manager",
  },
  {
    text: "I was looking for a trusted group for my ITR support. The team is doing a great job. One of my friends referred me to efiletax. of the best experiences I have had with any tax service provider. I will definitely recommend them to my colleagues.",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    name: "David Wilson",
    role: "Software Engineer",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 text-center">
      {/* Title */}
      <h4 className="text-teal-500 text-lg font-semibold">Testimonials</h4>
      <h2 className="text-5xl font-bold text-gray-900 mt-2">
        What Our Clients Say
      </h2>

      {/* Swiper Navigation Buttons (Outside) */}
      <div className="relative flex justify-center items-center mt-6">
        <div className="w-full max-w-6xl mx-auto px-4">
          {/* Swiper Carousel */}
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            modules={[Navigation, Pagination]}
            className="mt-6"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-100 rounded-xl shadow-lg p-6 text-gray-700 mx-4">
                  <p className="text-lg italic">
                    {testimonial.text.length > 100
                      ? `${testimonial.text.substring(0, 100)}...`
                      : testimonial.text}
                  </p>
                  <div className="mt-6 flex flex-col items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
                    />
                    <h4 className="font-semibold mt-3">{testimonial.name}</h4>
                    <p className="text-gray-500 italic">{testimonial.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
