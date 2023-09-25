
export async function generateMetadata(){
    
    return{
        title:'Register',
        description: 'register',
        keywords:'register',
        
    }
}
const Layout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;