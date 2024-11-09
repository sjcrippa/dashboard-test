"use client";

import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  FiAlertCircle,
  FiCheckCircle,
  FiTrendingUp,
  FiTrendingDown,
} from "react-icons/fi";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function DashboardAccionable() {
  const [datosVendedores] = useState([
    {
      id: 1,
      nombre: "Ana García",
      ventasActuales: 120000,
      metaVentas: 150000,
      clientesNuevos: 15,
      clientesPotenciales: 30,
      tasaCierre: 75,
    },
    {
      id: 2,
      nombre: "Carlos Rodríguez",
      ventasActuales: 98000,
      metaVentas: 120000,
      clientesNuevos: 10,
      clientesPotenciales: 25,
      tasaCierre: 60,
    },
    {
      id: 3,
      nombre: "María López",
      ventasActuales: 110000,
      metaVentas: 130000,
      clientesNuevos: 12,
      clientesPotenciales: 28,
      tasaCierre: 70,
    },
    {
      id: 4,
      nombre: "Juan Martínez",
      ventasActuales: 85000,
      metaVentas: 100000,
      clientesNuevos: 8,
      clientesPotenciales: 20,
      tasaCierre: 55,
    },
    {
      id: 5,
      nombre: "Laura Sánchez",
      ventasActuales: 105000,
      metaVentas: 110000,
      clientesNuevos: 11,
      clientesPotenciales: 22,
      tasaCierre: 65,
    },
  ]);

  const datosGrafico = {
    labels: datosVendedores.map((v) => v.nombre),
    datasets: [
      {
        label: "Ventas Actuales",
        data: datosVendedores.map((v) => v.ventasActuales),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Meta de Ventas",
        data: datosVendedores.map((v) => v.metaVentas),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const opcionesGrafico = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Ventas Actuales vs Meta de Ventas",
      },
    },
  };

  return (
    <section className="max-w-4xl mx-auto">
      <div className="p-4 space-y-6">
        <h2 className="text-3xl font-bold">Dashboard de Ventas Accionable</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Ventas Totales
              </CardTitle>
              <FiTrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                $
                {datosVendedores
                  .reduce((sum, v) => sum + v.ventasActuales, 0)
                  .toLocaleString()}
              </div>
              <Progress value={75} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                75% de la meta alcanzada
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Clientes Nuevos
              </CardTitle>
              <FiTrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {datosVendedores.reduce((sum, v) => sum + v.clientesNuevos, 0)}
              </div>
              <p className="text-xs text-muted-foreground">
                +18% del mes pasado
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Tasa de Cierre Promedio
              </CardTitle>
              <FiTrendingDown className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round(
                  datosVendedores.reduce((sum, v) => sum + v.tasaCierre, 0) /
                    datosVendedores.length
                )}
                %
              </div>
              <p className="text-xs text-muted-foreground">
                -2% del mes pasado
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Clientes Potenciales
              </CardTitle>
              <FiTrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {datosVendedores.reduce(
                  (sum, v) => sum + v.clientesPotenciales,
                  0
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                +5% del mes pasado
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Rendimiento de Ventas por Vendedor</CardTitle>
          </CardHeader>
          <CardContent>
            <Bar options={opcionesGrafico} data={datosGrafico} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Desempeño de Vendedores</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Vendedor</TableHead>
                  <TableHead>Ventas Actuales</TableHead>
                  <TableHead>Meta de Ventas</TableHead>
                  <TableHead>Progreso</TableHead>
                  <TableHead>Clientes Nuevos</TableHead>
                  <TableHead>Tasa de Cierre</TableHead>
                  <TableHead>Acción</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {datosVendedores.map((vendedor) => (
                  <TableRow key={vendedor.id}>
                    <TableCell className="font-medium">
                      {vendedor.nombre}
                    </TableCell>
                    <TableCell>
                      ${vendedor.ventasActuales.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      ${vendedor.metaVentas.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Progress
                          value={
                            (vendedor.ventasActuales / vendedor.metaVentas) *
                            100
                          }
                          className="w-full mr-2"
                        />
                        <span className="text-sm font-medium">
                          {Math.round(
                            (vendedor.ventasActuales / vendedor.metaVentas) *
                              100
                          )}
                          %
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>{vendedor.clientesNuevos}</TableCell>
                    <TableCell>{vendedor.tasaCierre}%</TableCell>
                    <TableCell>
                      {vendedor.ventasActuales < vendedor.metaVentas ? (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex items-center"
                        >
                          <FiAlertCircle className="mr-1" />
                          Revisar
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex items-center text-green-600"
                        >
                          <FiCheckCircle className="mr-1" />
                          Felicitar
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
