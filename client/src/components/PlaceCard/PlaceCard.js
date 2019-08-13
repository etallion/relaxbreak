import React from 'react';
import './PlaceCard.css'

class PlaceCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToolTip: false};
      }
      show = false;
      componentDidMount() {

      }

      render() {
          const { place } = this.props;
          return (
            <div className="placeWrapper" id={place.place_id}>
                    <i className="eyeCon" class="eye icon"></i> {place.name}
                    {/* <Tooltip id="tooltip-top"
                        placement="right"
                        delay={{ show: 100, hide: 100 }}
                        isOpen={this.state.isToolTip}
                        target={place.place_id}
                        toggle={() => this.setState({isToolTip: !(this.state.isToolTip)})}
                    >
                       {place.name}
                    </Tooltip> */}
            </div>
          );
      }
};

export default PlaceCard;