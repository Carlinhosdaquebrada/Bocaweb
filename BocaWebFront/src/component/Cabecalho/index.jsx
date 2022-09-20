export const Cabecalho = ({busca, buscaODA}) =>{
    var imagem=require('./img/logo.png');
    return (
        <html>
        <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"/>
            <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet"/>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
        </head>
        <body>
            <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand text-white" href="#"><img src={imagem} alt='Logo BocaWeb'></img>BocaWeb Front</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link text-white active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-white" href="#">Conheça o BocaWeb</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Contato
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"></hr></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-white disabled">Admin</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input name='busca' type='text' value={busca} placeholder='O que deseja buscar' onChange={buscaODA}/>
                    <button class="btn btn-outline-success bg-light" type="submit">Pesquisar</button>
                </form>
                </div>
            </div>
            </nav>
        
        </body>
        </html>
        )
    }