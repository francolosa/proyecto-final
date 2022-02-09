export default function LogIn(){

    return (
        <div>
        <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Usuario</label>
          <input type="text" class="form-control" id="usuarioLog" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Contraseña</label>
          <input type="password" class="form-control" id="contraseniaLog"/>
        </div>
        
        <button type="submit" class="btn btn-primary" onclick="iniciarSesion(usuarioLog.value, contraseniaLog.value)">Iniciar Sesión</button>
        </form>
        </div>
    )
}