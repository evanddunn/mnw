import React from 'react';

export default class Reading extends React.Component  {
    constructor(props) {
      super(props);
      this.state = {
        admins: [],
      };
    }

    async componentDidMount() {
      let a = await (await fetch('/admin')).json();
      this.setState({
        admins: a,
      });
    }

    render () {
      return (
        <div>
          This is Reading
          {
            this.state.admins.map(a => 
              <div key={a.id}>{a.username}</div>
            )
          }
        </div>
      )
    }
  }