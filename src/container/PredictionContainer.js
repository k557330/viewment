import React from 'react'

const PredictionContainer = () => {
    return (
        <div className="prediction-wrap">
            <div className="prediction-title">Prediction</div>

            <div className="prediction-container">
                <div className="prediction-container-title">추세 보기</div>
                <div className="prediction-content-wrap">
                    <img src={`${process.env.PUBLIC_URL}/images/least_squares.png`} alt="" />
                    <div className="prediction-content-container">
                        <div className="prediction-content">
                            <div className="prediction-content-title">최소자승법</div>
                            <div className="prediction-content-text">
                                지금까지의 데이터가<br />
                                이루고 있는 추세를 나타냅니다.
                            </div>
                            <div className="prediction-content-text">
                                추세가 오르고 있으니<br />
                                가격이 오를 확률이 높습니다.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="prediction-container">
                <div className="prediction-container-title">이동 평균 보기</div>
                <div className="prediction-content-wrap">
                    <div className="prediction-content-container">
                        <div className="prediction-content">
                            <div className="prediction-content-title">이동평균선</div>
                            <div className="prediction-content-text">
                                한 시점에서  지금까지<br />
                                누적된 데이터들의 평균을 나타냅니다.
                            </div>
                            <div className="prediction-content-text">
                                이동평균선보다 가격이<br />
                                높게 돼 있으므로<br />
                                가격이 오를 확률이 높습니다.
                            </div>
                        </div>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/images/moving_average.png`} alt="" />
                </div>
            </div>
        </div>
    )
}

export default PredictionContainer