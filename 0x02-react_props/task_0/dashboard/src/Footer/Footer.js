import './Footer.css'
import { getFullYear, getFooterCopy } from '../utils/utils'
export function Footer(){
    return <div className='App-footer'>
    <p data-testid="year-display"><i>Copyright {getFullYear()} - {getFooterCopy()}</i></p>
  </div>
}