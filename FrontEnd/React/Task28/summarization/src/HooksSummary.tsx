//   useState Example
//   useState<Type>(initialValue)
//   Automatically infers type if possible
//   Triggers re-render on update
import { useState, useEffect, useRef, useContext, createContext } from 'react';

export function StateExample(){
    const [count, setCount] = useState<number>(0);
    return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

//   useEffect Example
// Run side effects (like API calls, timers, etc).
// Runs after render
// Optional cleanup return
// Can have dependencies array [] to control re-runs
export function EffectExample() {
    const [time, setTime] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => setTime(t => t + 1), 1000);
        return () => clearInterval(interval);
    }, []);

    return <div>Time: {time}</div>;
}

//  useRef Example
// Access DOM nodes
// Store mutable values that don’t cause re-render
// Doesn’t cause re-renders when value changes
// inputRef.current holds the DOM node
export function RefExample() {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <>
        <input ref={inputRef} />
        <button onClick={() => inputRef.current?.focus()}>Focus</button>
        </>
    );
}

// useContext Example
// Share global data across components without prop drilling
// createContext<Type>(defaultValue)
// Use useContext(SomeContext) to access the value
// Use .Provider to provide value to children

type Theme = 'light' | 'dark';
const ThemeContext = createContext<Theme>('light');

export function ContextDisplay() {
    const theme = useContext(ThemeContext);
    return <div>Theme: {theme}</div>;
}

export function ContextWrapper() {
    return (
        <ThemeContext.Provider value="dark">
        <ContextDisplay />
        </ThemeContext.Provider>
    );
}
