import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Text, TouchableOpacity, StyleSheet, View, Dimensions } from 'react-native';
import styles from './modal.style';
import Modal from 'react-native-modal';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import { hideModalAction } from '../../state/actions/modal/modalActions';


const {width, height} = Dimensions.get('window');

const mapStateToProps = state => ({
  shouldShowLeftModal: state?.Modal?.leftModalVisibility,
  shouldShowBottomModal: state?.Modal?.bottomModalVisibility,
  shouldShowNormalModal: state?.Modal?.normaModalVisibility,
  shouldShowSlowModal: state?.Modal?.slowModalVisibility,
  modalChildren: state?.Modal?.children,
  //  removeChildren,
});

const mapDispatchToProps = {
  hideModal: hideModalAction,
};

class AllModals extends Component {
  

  RenderModalContent = child => (
    <View style={styles.modalContentParentContainer}>
      <TouchableOpacity onPress={this.props.hideModal}>
        <MaterialIconsIcon name="close" style={styles.closeIcon} />
      </TouchableOpacity>
      
        <View style={{ flex: 1, marginVertical: width * .02 }}>
          {child}
        </View>
      
    </View>
  );

  RenderBottomModalContent = child => (
    <View style={styles.bottomModalContainer}>
      <TouchableOpacity onPress={this.props.hideModal}>
        <MaterialIconsIcon name="close" style={styles.closeIcon} />
      </TouchableOpacity>
      {child}
    </View>
  );

  render() {
    return (
      <View style={styles.container}>

        {/* {this.props.fancyModal &&
          this._renderButton('Fancy modal!', () =>
            this.setState({visibleModal: 4}),
          )} */}


        <Modal
          isVisible={this?.props?.shouldShowNormalModal}
          // onBackdropPress={this.props.hideModal}
          onSwipeComplete={this.props.hideModal}
          swipeDirection="down"
          backdropOpacity={ 0.30 }
          avoidKeyboard>
          {this.RenderModalContent(this.props.modalChildren)}
        </Modal>

        <Modal
          isVisible={this?.props?.shouldShowLeftModal}
          avoidKeyboard
          swipeDirection={['left', 'right']}
          animationIn={'slideInLeft'}
          // onBackdropPress={this.props.hideModal}
          onSwipeComplete={this.props.hideModal}
          animationOut={'slideOutDown'}
          // coverScreen={ false }
          children={ this.RenderModalContent(this.props.modalChildren) }
          >
        </Modal>

        <Modal
          isVisible={this?.props?.shouldShowSlowModal}
          avoidKeyboard
          // onBackdropPress={this.props.hideModal}
          onSwipeComplete={this.props.hideModal}
          swipeDirection="down"
          animationInTiming={2000}
          animationOutTiming={2000}
          backdropTransitionInTiming={2000}
          backdropTransitionOutTiming={2000}
          children={this.RenderModalContent(this.props.modalChildren)}
          >
          
        </Modal>

        <Modal
          isVisible={this?.props?.shouldShowBottomModal}
          avoidKeyboard
          // onBackdropPress={this.props.hideModal}
          onSwipeComplete={this.props.hideModal}
          swipeDirection="down"
          style={styles.bottomModal}
          children={this.RenderBottomModalContent(this.props.modalChildren)}
          >
          
        </Modal>

        <Modal
          //TODO: Fancy Modal
          // isVisible={this?.state?.visibleModal === 4}
          avoidKeyboard
          backdropColor={'red'}
          backdropOpacity={1}
          animationIn={'zoomInDown'}
          animationOut={'zoomOutUp'}
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1000}>
          children={ this.RenderModalContent(this.props.modalChildren) }
        </Modal>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllModals);
