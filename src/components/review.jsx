import React from "react";
import emily from '/assets/others/image-emily.jpg'
import jennie from '/assets/others/image-jennie.jpg'
import thomas from '/assets/others/image-thomas.jpg'
import '../styles/review.scss'
export default function Review() {
    return (
        <div className="review">
            <div className="title">
                <h3>client testimonials</h3>
            </div>
            <div className="review-container">
                <div className="client">
                    <img src={emily} alt="" />
                    <p className="client-paragraph">
                        we put our truth in sunnyside and they delivered,
                        making sure our needs where met and dealines were
                        met and deadlines were always hit.
                    </p>
                    <h4 className="name">
                        emily R.
                    </h4>

                    <i className="italic">marketing director</i>
                </div>
                <div className="client">
                    <img src={thomas} alt="" />
                    <p className="client-paragraph">
                        sunnyside's ethusiasm coupled with their
                        keen ineterst in our brand's success made it
                        a satisfying and enjoyable experience.
                    </p>
                    <h4 className="name">
                        thomas s.
                    </h4>

                    <i className="italic">cheif operating officer</i>
                </div>
                <div className="client">
                    <img src={jennie} alt="" />
                    <p className="client-paragraph">
                        incerdible result! our sales increased
                        over 400% when we worked with sunnyside.
                        highly recommended!
                    </p>
                    <h4 className="name">
                        jennie F.
                    </h4>

                    <i className="italic">business owner</i>
                </div>
            </div>
        </div>
    )
}