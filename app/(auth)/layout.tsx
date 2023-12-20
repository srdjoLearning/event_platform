const Layout = ( { children }: { children:React.ReactNode }) => {
    return (
        <div className="flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-cover">
            {children}
        </div>
    )
}

export default Layout