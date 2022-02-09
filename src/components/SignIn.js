export default function SignIn(){
    return (

        <div>
        <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Usuario</label>
          <input type="text" class="form-control" id="usuarioNew" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Contraseña</label>
          <input type="password" class="form-control" id="contraseniaNew"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Repetí tu Contraseña</label>
          <input type="password" class="form-control" id="contraseniaNew"/>
        </div>
        <button type="submit" class="btn btn-primary" onclick="crearCuenta(usuarioNew.value, contraseniaNew.value)">Crear Cuenta</button>
        </form>
        </div>
    )
}