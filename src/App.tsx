import { useEffect } from 'react';
import { useCustomToast } from './components/Hooks/useCustomToast';
import { Navigation } from './navigation';
import { toastStore } from './stores';

function App() {

  const customToast = useCustomToast()

  useEffect(() => {
    toastStore.setToast(customToast)
    return () => toastStore.clearToast()
  }, [customToast])

  return (
    <Navigation/>
  );
}

export default App;
