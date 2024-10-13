import { Link } from "react-router-dom";

function TopHeader(){
    return(
        <div style={{minWidth: '100vw', minHeight:'35px', backgroundColor:'black', display:'flex', justifyContent:'space-around', alignItems:'center'}}>
            <div style={{minWidth:'50vw' ,color:'white', fontSize: '12px', display:'flex', justifyContent:'flex-end'}}>
             <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p> 
             <p style={{paddingLeft:'8px', textDecoration: 'undeline', textDecorationColor:'white', textUnderlineOffset:'0.2em'}}><Link to="/homepage" style={{color:'white', fontSize: '12px',}}>ShopNow</Link></p>
            </div>
            <div style={{display:'flex', justifyContent:'flex-end'}}>
                <select id="languages" name="languages" style={{color:'white', fontSize: '12px',padding: '5px', outline: 'none', border:'none',backgroundColor: '#000000',cursor: 'pointer',}}>
                    <option value="english" style={{padding: '5px'}} selected>English</option>
                    <option value="sinhala" style={{padding: '5px'}}>Sinhala</option>
                    <option value="france" style={{padding: '5px'}}>France</option>
                    <option value="german" style={{padding: '5px'}}>German</option>
                </select>
            </div>
        </div>
    );
}

export default TopHeader;