import { useEffect, useState } from "react";



function useOffline() {

    const [offline, setOffline] = useState(!navigator.onLine);

    useEffect(() => {

        window.addEventListener('online', () => setOffline(false));
        window.addEventListener('offline', () => setOffline(true));

        return () => {
            window.removeEventListener('online', () => setOffline(false));
            window.removeEventListener('offline', () => setOffline(true));
        }

    }, []);

    return offline;
}

export default useOffline;