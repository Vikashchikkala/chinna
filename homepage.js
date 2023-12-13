// import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
const HomeScreen = () => {
    
    return (
        <div className="container-fluid">
            <dl>
                <img src="../public/images/flag.PNG" width="100px" height="50px" alt="Flag" />
                <dt>Live Betting</dt>
                <dt>Sports</dt>
                <dt>Casino</dt>
                <dt>Live Casino</dt>
                <dt>eSports</dt>
                <dt>promotions</dt>
                <dt>Loyalty Club</dt>
                <div>
                    <button>Deposit</button>
                    <button>Withdraw</button>
                    <button className="bi bi-person"></button>
                </div>
            </dl>
            <div className="section">
                <div className="image">
                    <img src="../public/images/fig1.PNG" width="150px" alt="Figure 1" />
                    <img src="../public/images/fig2.PNG" width="160px" alt="Figure 2" />
                    <img src="../public/images/fig3.PNG" width="150px" alt="Figure 3" />
                </div>
                <h5>Top section</h5>
                <div className="nav">
                    <img src="../public/images/fig4.PNG" width="470px" alt="Figure 4" />
                </div>
                <div>
                    <img src="../public/images/fig5.PNG" width="150px" alt="Figure 5" />
                    <img src="../public/images/fig6.PNG" width="160px" alt="Figure 6" />
                    <img src="../public/images/fig7.PNG" width="150px" alt="Figure 7" />
                </div>
            </div>
        </div>
    );
}
export default HomeScreen;
