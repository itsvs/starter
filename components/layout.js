import config from '../config.json'

class Layout extends React.Component {

    constructor(props) {
        super(props)
        this.state = {navMob: {
            display: "none"
        }}
    }

    nav(arr) {
        var brk = [], fwd = []
        arr.forEach(i => {
            brk.push(<a href={i.url}>{i.title}</a>)
            brk.push(<br />)

            fwd.push(<a href={i.url}>{i.title}</a>)
            fwd.push(" / ")
        })
        brk = brk.slice(0, -1)
        fwd = fwd.slice(0, -1)

        return [brk, fwd]
    }

    render() {
        var subtitle = config.header.subtitle
        var topNav = config.header.topnav
        var subNav = config.header.subnav
        var botNav = config.footer.bottomnav
        var children = this.props.children

        if (topNav) var [topbreak, topslash] = this.nav(topNav)
        if (subNav) var [subbreak, subslash] = this.nav(subNav)
        if (botNav) var [botbreak, botslash] = this.nav(botNav)
        
        return [
            <div id="nav-mob" className="nav-overlay" key="0" style={this.state.navMob}>
                <div className="nav-content" id="header">
                    {subNav
                        ? [
                            <h4 className="text-muted">
                                {subbreak}
                            </h4>,

                            <hr />,
                        ]
                        : ""}

                    {topNav
                        ? 
                            <h4 className="text-muted">
                                {topbreak}
                            </h4>
                        : ""}
                </div>
            </div>,

            <div className="container" key="1">
                <div className="header">
                    <nav className="navbar-light">
                        <div className="float-left">
                            <h4>
                                {config.header.homelink ? <a href={config.header.homelink}>{config.header.homename ? config.header.homename : config.sitetitle ? config.sitetitle : "home"}</a> : config.header.homename ? config.header.homename : config.sitetitle ? config.sitetitle : "home"}
                            </h4>
                        </div>
                        <div className="float-right">
                            <h4 className="d-none d-sm-none d-md-block">
                                {topNav ? topslash : ""}
                            </h4>

                            <span className="d-block d-sm-block d-md-none">
                                <button
                                    className="navbar-toggler nav-button"
                                    type="button"
                                    onClick={this.toggleNav}
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </span>
                        </div>
                    </nav>
                </div>

                <p className="text-muted" id="header">
                    {subtitle ? subtitle : "vanshaj [at] berkeley [dot] edu"}
                    <span className="float-right d-none d-sm-none d-md-block">
                        {subNav ? subslash : ""}
                    </span>
                </p>
            </div>,

            <div className="container-fluid" key="2">
                <hr />
            </div>,

            <div className="container" key="3">
                {children}
            </div>,

            <footer className="footer" key="4">
                <div className="container">
                    <span className="text-muted">
                        &copy; {config.footer.copyright ? config.footer.copyright : ""}
                        <span className="float-right" id="bottomNav">
                            {botNav ? botslash : ""}
                        </span>
                    </span>
                </div>
            </footer>,

            <script
                src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                crossOrigin="anonymous"
            ></script>,

            <script
                src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                crossOrigin="anonymous"
            ></script>,

            <script
                src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
                integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                crossOrigin="anonymous"
            ></script>,

            config.customjs ? <script src="https://go.imvs.me/script.js"></script> : "",

            <script src="/custom.js"></script>,
        ];
    }

    toggleNav() {
        if ($( "#nav-mob" ).css("display") == "block") {
            $( "#nav-mob" ).css("display", "none")
        } else {
            $( "#nav-mob" ).css("display", "block")
        }
    }

}

export default Layout
