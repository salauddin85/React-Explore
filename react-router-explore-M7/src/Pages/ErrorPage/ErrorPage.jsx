import React from 'react'
import { useRouteError } from 'react-router-dom'


function ErrorPage() {
    const useRouterError = useRouteError();  
    console.log(useRouterError)
    return (
        <div>
            <h2>Oops something went wrong</h2>
            <h3>{useRouterError.status} {useRouterError.statusText}</h3>
            <p>{useRouterError.data}</p>
        </div>
    )
}

export default ErrorPage
