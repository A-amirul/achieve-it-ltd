import careerBanner from '../../assets/Career/careerBanner.jpg'
import CareerSection from './CareerSection';
import CurrentJobOpenings from './CurrentJobOpenings';
const Career = () => {
    return (
        <div>
            <div className='bg-black'>
                <img className='opacity-80 w-full h-64 md:h-[450px] ' src={careerBanner} alt="" />
            </div>
            <CareerSection></CareerSection>
            <CurrentJobOpenings></CurrentJobOpenings>
        </div>
    );
};

export default Career;