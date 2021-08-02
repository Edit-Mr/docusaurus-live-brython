import * as React from 'react';


/**
 * @url https://medium.com/welldone-software/usecallback-might-be-what-you-meant-by-useref-useeffect-773bc0278ae
 * 
 * @param {(node: any) => void} onMount 
 * @param {(node: any) => void} onUnmount
 * @returns (node: any) => void
 */
const useRefWithCallback = (onMount, onUnmount) => {
    const nodeRef = React.useRef(null);

    const setRef = React.useCallback(node => {
        if (nodeRef.current) {
            onUnmount(nodeRef.current);
        }

        nodeRef.current = node;

        if (nodeRef.current) {
            onMount(nodeRef.current);
        }
    }, [onMount, onUnmount]);

    return setRef;
}

export { useRefWithCallback }