import style from './About.module.scss';
import Logo from '../../Icons/logo.svg'

import Container from "../Container"



    const About = () => {

return (<section className={style.Section}>
    <Container>
    <ul className={style.List} id="listItem" style={{backgroundImg: Logo}}>
        <li className={style.Item}><p  className={style.Text}>Киевский плейбек-театр “Déjà vu plus” – театр-лаборатория, основанная в ноябре 2008 года. Работает в направлении плейбек-театра – современной социально-психологической практики, сочетающей элементы сценического и уличного театра, интерактивного искусства (хеппенинга, перформанса), психологического шоу и психодраматических постановок.</p></li>
        <li className={style.Item}><p className={style.Text}>В основной состав “Déjà vu plus” входит 8 плейбек-актеров, прошедших специальную подготовку в международных и отечественных обучающих программах данного направления.</p></li>
        <li className={style.Item}><p className={style.Text}>За время своего существования результаты творческой работы команды “Déjà vu plus” были представлены в более 200 выступлений, в том числе гастрольных: АР Крым (август 2010, 2011), г. Санкт-Петербург (март 2011). Театр участвовал в Международном фестивале плейбек-театров (август 2009), является организатором Украинской школы подготовки специалистов плейбек-театра и соорганизатором Российско-Украинского филиала Нью-Йоркского Центра Плейбек Театра (с апреля 2010).</p></li>
        <li className={style.Item}><p className={style.Text}>Перформанс плейбек-театра представляет собой структурированную и композиционно завершенную последовательность сценических миниатюр по мотивам зрительских историй. Ведущий обращается к присутствующей аудитории с просьбой поделиться своими чувствами, настроением или рассказать историю из собственной жизни. После короткого структурированного диалога ведущего со зрителем актеры, находящиеся на сцене, импровизировано и не договариваясь друг с другом, воплощают предложенный сценарий при помощи специальных техник (форм).</p></li>
    </ul>

    </Container>
</section>)
}

export default About