import resumeIcon from '../assets/hiring.png';
import './Login.scss';

export const Login: React.FC = () => {
    return (
        <div className="login">
            <div className='login__info'>
                <div className='login__info-content'>
                    <img src={resumeIcon} alt='Resume Review' className="login__icon" />
                    <h1 className="login__title">Resume Review</h1>
                    <p className="login__description">Your one-stop solution for resume feedback and mock interviews.</p>
                </div>
            </div>
        </div>
    )
}