import ReactWeather, { useOpenWeather } from 'react-open-weather';
import './reactWeather.scss'
import Carousel from 'react-grid-carousel'
import { Card } from 'react-bootstrap';


export default function ReactWeathers() {

    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '7833aae64dcd3fcf5a133f4352863fa2',
        lat: '-0.8917',
        lon: '119.8707',
        lang: 'id',
        unit: 'metric'

    });

    const customStyles = {
        innerWidth: '100%',
        fontFamily: 'Helvetica, sans-serif',
        gradientStart: '#0181C2',
        gradientMid: '#04A7F9',
        gradientEnd: '#4BC4F7',
        locationFontColor: '#FFF',
        todayTempFontColor: '#FFF',
        todayDateFontColor: '#B5DEF4',
        todayRangeFontColor: '#B5DEF4',
        todayDescFontColor: '#B5DEF4',
        todayInfoFontColor: '#B5DEF4',
        todayIconColor: '#FFF',
        forecastBackgroundColor: '#DDD',
        forecastSeparatorColor: '#DDD',
        forecastDateColor: '#777',
        forecastDescColor: '#777',
        forecastRangeColor: '#777',
        forecastIconColor: '#4BC4F7'
    };


    return (
        <div>
            <Carousel cols={1} rows={1} gap={12} loop className="Carousel" autoplay={2000} >
                <Carousel.Item> 
                    <Card>
                 
                        <ReactWeather
                            theme={customStyles}
                            isLoading={isLoading}
                            errorMessage={errorMessage}
                            data={data}
                            lang="id"
                            locationLabel="Palu"   
                            unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                            showForecast={false}
                        />

                    </Card>
                </Carousel.Item>

                <Carousel.Item>
                    <Card>
                
                        <ReactWeather
                           theme={customStyles}
                           isLoading={isLoading}
                           errorMessage={errorMessage}
                           data={data}
                           lang="id"
                           locationLabel="Sleman"   
                           unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                           showForecast={false}
                        />

                    </Card>
                </Carousel.Item>

                <Carousel.Item>
                    <Card>
                        
                        <ReactWeather
                           theme={customStyles}
                           isLoading={isLoading}
                           errorMessage={errorMessage}
                           data={data}
                           lang="id"
                           locationLabel="Yogyakata"   
                           unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                           showForecast={false}
                        />

                    </Card>
                </Carousel.Item>

                <Carousel.Item>
                    <Card>
                        
                        <ReactWeather
                           theme={customStyles}
                           isLoading={isLoading}
                           errorMessage={errorMessage}
                           data={data}
                           lang="id"
                           locationLabel="Bandung"   
                           unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                           showForecast={false}

                        />

                    </Card>
                </Carousel.Item>

                <Carousel.Item>
                    <Card>
                        
                        <ReactWeather
                           theme={customStyles}
                           isLoading={isLoading}
                           errorMessage={errorMessage}
                           data={data}
                           lang="id"
                           locationLabel="Bantul"   
                           unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                           showForecast={false}

                        />

                    </Card>
                </Carousel.Item>



            </Carousel>




        </div>

    )
}