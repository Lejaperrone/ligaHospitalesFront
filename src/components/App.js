import React from 'react';
import Header from './Header';
import NoticiasContainer from './NoticiasContainer';

class App extends React.Component {

    state = { noticias : [
        {
            titulo: 'Gano river',
            epigrafe: 'el epigrafe:lakdfjdaklfjdadaa',
            imagen: 'https://media.aws.alkosto.com/media/catalog/product/cache/3/image/8bf9d84cc5f65bd89f2d4160406987fb/8/4/843956550065-2_1.jpg',
            descripcion: 'una descripcion'
        },
        {
            titulo: 'Gano racing',
            epigrafe: 'el epigrafe:lakdfjdaklfjdadaa',
            imagen: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjQ2b3-4rnhAhVYJrkGHUZ4BcQQjRx6BAgBEAU&url=https%3A%2F%2Fes.123rf.com%2Fphoto_14836457_vector-pelota-de-f%25C3%25BAtbol-bal%25C3%25B3n-de-f%25C3%25BAtbol-.html&psig=AOvVaw2xATbR757u-ziv3KIUVN4O&ust=1554581873828966',
            descripcion: 'otra descripcion'
        }
        ]};

    render() {

        return(
            <div className="ui container">
                <Header/>
                <NoticiasContainer noticias = {this.state.noticias}/>
            </div>
        );
    }
}

export default App;