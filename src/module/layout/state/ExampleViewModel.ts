import { useState } from 'react'
import { ExampleViewModel } from '../model/interface';
export default function exampleViewModel(): ExampleViewModel {
    const [count, setCount] = useState<number>(0);
    const _increment = (): void => setCount(count + 1);
    const _decrement = (): void => setCount(count - 1);
    return { count, _increment, _decrement }
}

/// xu ly logic 