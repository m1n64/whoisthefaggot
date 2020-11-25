import { useRouter } from 'next/router'

const Counter = () => {
    const router = useRouter();
    let {cnt} = router.query;

    cnt=+cnt+1;

    return (
        <p>
            Count:
            {cnt}
        </p>
    )
}

export default Counter