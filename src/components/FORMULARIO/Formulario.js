import React, { useRef } from "react";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2/dist/sweetalert2.all";
import "sweetalert2/dist/sweetalert2.min.css";

import "./formulario.css";

const Formulario = () => {
  const form = useRef();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.preventDefault();
    form.current.reset();

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your data has been sended.",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  return (
    <>
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre : </label>
          <input
            placeholder="Juan"
            type="text"
            {...register("name", {
              required: true,
              maxLength: 10,
            })}
          />

          {errors.name?.type === "required" && (
            <p>El campo Name es requerido.</p>
          )}

          {errors.name?.type === "maxLength" && (
            <p>El campo Name debe tener menos de 10 caracteres.</p>
          )}
        </div>

        <div>
          <label>Ciudad : </label>
          <input
            placeholder="Cadiz"
            type="text"
            {...register("city", {
              required: true,
              maxLength: 10,
            })}
          />
          {errors.city?.type === "required" && (
            <p>El campo Ciudad es requerido.</p>
          )}
          {errors.city?.type === "maxLength" && (
            <p>El campo Ciudad debe tener menos de 10 caracteres.</p>
          )}
        </div>
        <div>
          <label>Email : </label>
          <input
            placeholder="correo@correo.com"
            type="text"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
          />
          {errors.email?.type === "required" && (
            <p>El campo Email es requerido.</p>
          )}
          {errors.email?.type === "pattern" && (
            <p>El formato del Email es incorrecto.</p>
          )}
        </div>
        <div>
          <label>Sexo : </label>
          <select
            {...register("sex", {
              required: true,
            })}
          >
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
            <option value="T">Transexual</option>
          </select>
          {errors.sex?.type === "required" && (
            <p>El campo Sexo es requerido.</p>
          )}
        </div>
        <button className="btn-send" type="submit">
          Send
        </button>
      </form>
    </>
  );
};

export default Formulario;
