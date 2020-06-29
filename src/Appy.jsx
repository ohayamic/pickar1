const HistoryDiv = historys.length? 
    (historys.map(history=>{
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        One of three columns
                    </div>
                    <div className="col-sm">
                        One of three columns
                    </div>
                    <div className="col-sm">
                        One of three columns
                    </div>
                </div>
            </div>
        )
    })) : 
    (
        <div className="jumbotron">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
        </div>
    );


    componentDidMount() {
        fetch(`http://api.currencylayer.com/convert
        ? access_key = YOUR_ACCESS_KEY
        & from = USD
        & to = EUR
        & amount = 25
        & format = 1
        & date = YYYY-MM-DD`)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.items
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }