import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className='d-flex align-items-center justify-content-center error-boundary-container flex-column'>
                    <i class="fa-solid fa-triangle-exclamation mb-4" style={{ color: '#bca59e', fontSize: '70px' }}></i>
                    <h1> Oops! Something went wrong.</h1>
                    <p className='mt-2'>{this.state.error && this.state.error.toString()}</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
