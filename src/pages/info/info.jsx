import React, {Component} from 'react';
import '../PagesStyles.css'

class Info extends Component {
    render() {
        return (<div id='info'>
                <p className="headerText m-5">Спеціалізований ремонт тягачів та напівпричепів</p>
                <div className="row Pages_total">
                    <div className="aboutAsText">
                        <p className="ml-5  mr-4">    &#128736; TIR СТО - це професійний, спеціалізований автосервіс в
                            м.Перемишлян, де вам допоможуть вирішити будь-які
                            проблеми пов'язані з спеціалізованим ремонтом грузової техніки, також причіпної техніки до
                            них від відомих виробників.
                        </p>
                        <p className="ml-5  mr-4">    &#128736; Автомайстерні TIR спеціалізується на ремонті ходової
                            частини автомобілів європейського виробництва
                            таких як: DAF, Mercedes, MAN, Scania, Reno та інших.
                        </p>
                        <p className="ml-5  mr-4">
                            &#128736; Грузова техніка оснащена складною технічною системою, тому для її ремонту потрібні
                            вузьконаправлені та досвідчені спеціалісти,
                            які і парцюють в автомайстерні TIR. Вони допоможуть розібратись з будь-якою проблемою
                            повзянаю з вашою технікою в найкоротші строки.
                        </p>

                    </div>

                </div>
            </div>

        );
    }
}

export default Info;