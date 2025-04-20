'use client'

import { Component } from 'react'

class E extends Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="text-lg">
          Sorry, the page you are looking for does not exist.
        </p>
        <p className="text-lg">
          Please check the URL or return to the homepage.
        </p>
        <a href="/" className="mt-4 text-blue-500 hover:underline">
          Go to Homepage
        </a>
      </div>
    )
  }
}

export default E
