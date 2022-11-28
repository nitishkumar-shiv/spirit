import Heap from '@heap/react-native-heap';

export const heapTrackEvent = (eventName, properties) => {
  try {
    Heap.track(eventName, properties);
  } catch (err) {
    console.log('Error in heapAnalyticsManualTrack', err);
  }
};

export const heapIdentify = userId => {
  try {
    console.log(userId);
    Heap.identify(userId);
  } catch (err) {
    console.log('Error in heapAnalyticsIdentifyUser', err);
  }
};

export const heapAddUserProperties = properties => {
  try {
    Heap.addUserProperties(properties);
  } catch (err) {
    console.log('Error in heapAnalyticsAddUserProperties', err);
  }
};

export const heapResetIdentity = () => {
  try {
    Heap.resetIdentity();
  } catch (err) {
    console.log('Error in heapAnalyticsResetIdentity', err);
  }
};
