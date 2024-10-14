export default function Navbar() {
    return (
        <nav style={{ display:"flex",justifyContent:"space-between", 
        backgroundColor:"green", alignItems:"center", borderRadius:"10px", 
        paddingLeft:"100px", paddingRight:"100px"}}>

            <div style={{ border:"100px solid red" }}>Logo</div>
            <ul style={{ border:"100px solid blue", display:"flex", 
                gap:"30px", listStyleType:"none", height:"10px", marginTop:"10px"}}>
                <li><a style={{ color:"red", textDecoration:"none", fontSize:"200px" }}
                 href="/">Home</a></li>
                <li><a style={{ color:"red", textDecoration:"none", fontSize:"200px" }} 
                href="/about">About</a></li>
                <li><a style={{ color:"red", textDecoration:"none", fontSize:"200px" }}
                 href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}