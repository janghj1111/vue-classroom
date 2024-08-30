import { useSampleStore } from "./sample/useSample";

const useStore = () => ({
  sample: useSampleStore(),
});

export default useStore;