
export async function generateMetadata(){
    
    return{
        title:'login',
        description: 'login',
        keywords:'login',
        
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