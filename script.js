// Secciones del sistema
const secciones = {
    productos: `
        <h2 class="text-center my-4">Gestión de Productos</h2>
        <div class="text-end mb-3">
            <button class="btn btn-primary" id="addProductBtn">Agregar Producto</button>
        </div>
        <table class="table table-bordered table-striped">
            <thead class="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio Compra</th>
                    <th>Precio Venta</th>
                    <th>Stock</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody id="product-table">
                <!-- Datos simulados -->
            </tbody>
        </table>
    `,
    usuarios: `
        <h2 class="text-center my-4">Gestión de Usuarios</h2>
        <p class="text-center">Aquí se gestionan los usuarios del sistema.</p>
        <div class="text-center">
            <button class="btn btn-primary" onclick="alert('Función para agregar usuarios simulada')">Agregar Usuario</button>
        </div>
    `,
    roles: `
        <h2 class="text-center my-4">Gestión de Roles</h2>
        <p class="text-center">Aquí se gestionan los roles disponibles.</p>
        <div class="text-center">
            <button class="btn btn-primary" onclick="alert('Función para agregar roles simulada')">Agregar Rol</button>
        </div>
    `,
    movimientos: `
        <h2 class="text-center my-4">Movimientos de Inventario</h2>
        <p class="text-center">Aquí se gestionan los movimientos del inventario.</p>
        <div class="text-center">
            <button class="btn btn-primary" onclick="alert('Función para registrar movimientos simulada')">Registrar Movimiento</button>
        </div>
    `,
    proveedores: `
        <h2 class="text-center my-4">Gestión de Proveedores</h2>
        <p class="text-center">Aquí se gestionan los proveedores de la librería.</p>
        <div class="text-center">
            <button class="btn btn-primary" onclick="alert('Función para agregar proveedores simulada')">Agregar Proveedor</button>
        </div>
    `
};

// Función para cargar una sección
function navigateTo(section) {
    const content = document.getElementById('content');
    content.innerHTML = secciones[section] || `<p class="text-center">Sección no encontrada.</p>`;

    // Si estamos en la sección de productos, cargar la tabla
    if (section === 'productos') {
        loadProducts();
    }
}

// Datos simulados de productos
const productos = [
    {
        id: 1,
        codigo: "P001",
        nombre: "Libro de Cálculo",
        descripcion: "Un libro avanzado sobre cálculo.",
        precioCompra: 200.00,
        precioVenta: 250.00,
        stock: 15
    },
    {
        id: 2,
        codigo: "P002",
        nombre: "Cuaderno de Matemáticas",
        descripcion: "Cuaderno para ejercicios matemáticos.",
        precioCompra: 50.00,
        precioVenta: 75.00,
        stock: 30
    }
];

// Cargar productos en la tabla
function loadProducts() {
    const table = document.getElementById('product-table');
    table.innerHTML = ''; // Limpiar contenido
    productos.forEach(producto => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.codigo}</td>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.precioCompra.toFixed(2)}</td>
            <td>${producto.precioVenta.toFixed(2)}</td>
            <td>${producto.stock}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editProduct(${producto.id})">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="deleteProduct(${producto.id})">Eliminar</button>
            </td>
        `;
        table.appendChild(row);
    });
}

// Simular editar y eliminar producto
function editProduct(id) {
    alert(`Función para editar producto con ID: ${id}`);
}

function deleteProduct(id) {
    alert(`Función para eliminar producto con ID: ${id}`);
}

// Cargar sección inicial al abrir la página
window.onload = () => navigateTo('productos');
