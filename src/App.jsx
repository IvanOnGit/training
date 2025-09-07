import React, { useState, useEffect } from 'react';
import { Clock, Dumbbell, Apple, Calendar } from 'lucide-react';

const FitnessScheduler = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Actualizar el tiempo cada minuto
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // Configuración de entrenamientos por día (0 = Domingo, 1 = Lunes, etc.)
  const workoutSchedule = {
    0: { muscle: "Descanso", exercises: ["Caminar 30 min", "Estiramientos"] },
    1: { muscle: "Pecho y Bíceps", exercises: ["Press banca 4x10", "Incline press 3x12", "Curl bíceps 4x12", "Martillo 3x10"] },
    2: { muscle: "Espalda y Tríceps", exercises: ["Dominadas 4x8", "Remo 4x10", "Press francés 4x12", "Fondos 3x12"] },
    3: { muscle: "Piernas", exercises: ["Sentadillas 4x12", "Peso muerto 4x8", "Extensiones 3x15", "Curl femoral 3x12"] },
    4: { muscle: "Hombros y Abdominales", exercises: ["Press militar 4x10", "Elevaciones laterales 4x12", "Plancha 3x1min", "Crunches 4x20"] },
    5: { muscle: "Brazos", exercises: ["Curl barra 4x10", "Press cerrado 4x10", "21s bíceps 3 series", "Extensiones polea 4x12"] },
    6: { muscle: "Cardio y Core", exercises: ["Cardio 45 min", "Plancha lateral 3x45s", "Mountain climbers 4x20", "Burpees 3x10"] }
  };

  // Configuración de comidas por día y hora
  const mealSchedule = {
  0: [ // Domingo
    { timeRange: "7:00-10:00", meal: "Desayuno", foods: ["4 claras + 2 huevos enteros revueltos", "80g avena con 200ml leche", "1 banana", "20g manteca de maní", "1 vaso jugo o leche"] },
    { timeRange: "10:00-13:00", meal: "Media mañana", foods: ["2 rebanadas pan integral", "100g pechuga de pavo/jamón cocido", "20g queso", "10 almendras", "1 yogur griego"] },
    { timeRange: "13:00-16:00", meal: "Almuerzo", foods: ["150–200g pollo/carne/pescado", "150g arroz o pasta cocida", "Ensalada con 10g aceite de oliva", "1 fruta"] },
    { timeRange: "16:00-19:00", meal: "Merienda", foods: ["1 scoop proteína", "300ml leche", "50g avena", "1 banana", "20g manteca de maní"] },
    { timeRange: "19:00-22:00", meal: "Cena", foods: ["150–200g carne roja/pescado/pollo", "150g papa/batata/arroz/pasta", "Verduras con 10g aceite de oliva", "1 huevo duro o feta de queso"] },
    { timeRange: "22:00-23:30", meal: "Snack nocturno", foods: ["250g yogur griego o queso cottage", "30g nueces/almendras", "1 fruta chica"] }
  ],
  1: [ // Lunes
    { timeRange: "7:00-10:00", meal: "Desayuno", foods: ["4 claras + 2 huevos", "80g avena con leche", "1 banana", "20g manteca de maní", "1 vaso de jugo"] },
    { timeRange: "10:00-13:00", meal: "Media mañana", foods: ["Pan integral (80g)", "100g jamón cocido/pavo", "Queso 20g", "Nueces 10g", "Yogur griego"] },
    { timeRange: "13:00-16:00", meal: "Almuerzo", foods: ["200g pollo", "150g arroz blanco cocido", "Ensalada + 10g aceite de oliva", "1 fruta"] },
    { timeRange: "16:00-19:00", meal: "Merienda", foods: ["Batido: 1 scoop proteína + 300ml leche + 50g avena + 1 banana + 20g manteca de maní"] },
    { timeRange: "19:00-22:00", meal: "Cena", foods: ["200g pescado blanco", "150g batata/pasta", "Verduras + aceite de oliva", "1 huevo duro"] },
    { timeRange: "22:00-23:30", meal: "Snack nocturno", foods: ["Queso cottage 200g", "30g almendras", "1 fruta chica"] }
  ],
  2: [ // Martes
    { timeRange: "7:00-10:00", meal: "Desayuno", foods: ["4 claras + 2 huevos", "Pan integral 2 rebanadas", "Leche/café", "1 banana"] },
    { timeRange: "10:00-13:00", meal: "Media mañana", foods: ["Batido: 1 scoop proteína + leche", "1 fruta", "10 nueces"] },
    { timeRange: "13:00-16:00", meal: "Almuerzo", foods: ["200g carne roja magra", "150g papa cocida", "Verduras salteadas + aceite de oliva"] },
    { timeRange: "16:00-19:00", meal: "Merienda", foods: ["Yogur griego 200g", "20g nueces", "1 kiwi/manzana"] },
    { timeRange: "19:00-22:00", meal: "Cena", foods: ["200g pavo", "150g arroz integral", "Ensalada variada + 10g aceite de oliva"] },
    { timeRange: "22:00-23:30", meal: "Snack nocturno", foods: ["250g yogur griego", "30g frutos secos", "1 fruta chica"] }
  ],
  3: [ // Miércoles
    { timeRange: "7:00-10:00", meal: "Desayuno", foods: ["4 claras + 2 huevos", "80g avena en leche", "1 banana", "20g manteca de maní"] },
    { timeRange: "10:00-13:00", meal: "Media mañana", foods: ["Pan integral (80g)", "100g jamón cocido/pavo", "20g queso", "10 almendras", "1 yogur griego"] },
    { timeRange: "13:00-16:00", meal: "Almuerzo", foods: ["200g pollo", "150g arroz integral", "Brócoli", "10g aceite de coco/oliva"] },
    { timeRange: "16:00-19:00", meal: "Merienda", foods: ["Batido: proteína + leche + avena + banana + manteca de maní"] },
    { timeRange: "19:00-22:00", meal: "Cena", foods: ["200g pescado", "150g quinoa/papa", "Verduras al vapor + aceite de oliva"] },
    { timeRange: "22:00-23:30", meal: "Snack nocturno", foods: ["Queso cottage 200g", "30g nueces", "1 fruta"] }
  ],
  4: [ // Jueves
    { timeRange: "7:00-10:00", meal: "Desayuno", foods: ["4 claras + 2 huevos", "80g avena con leche", "1 banana", "1 vaso de jugo"] },
    { timeRange: "10:00-13:00", meal: "Media mañana", foods: ["Batido proteína", "1 fruta", "10 nueces"] },
    { timeRange: "13:00-16:00", meal: "Almuerzo", foods: ["200g pescado", "150g batata", "Ensalada + 10g aceite de oliva"] },
    { timeRange: "16:00-19:00", meal: "Merienda", foods: ["Yogur griego natural 200g", "30g granola", "1 fruta (arándanos/frutilla)"] },
    { timeRange: "19:00-22:00", meal: "Cena", foods: ["200g pollo", "150g arroz o pasta", "Verduras mixtas + aceite de oliva"] },
    { timeRange: "22:00-23:30", meal: "Snack nocturno", foods: ["250g yogur griego o cottage", "30g frutos secos"] }
  ],
  5: [ // Viernes
    { timeRange: "7:00-10:00", meal: "Desayuno", foods: ["4 claras + 2 huevos", "1 taza avena con leche", "1 banana", "20g manteca de maní"] },
    { timeRange: "10:00-13:00", meal: "Media mañana", foods: ["Batido proteína", "1 fruta", "20g almendras"] },
    { timeRange: "13:00-16:00", meal: "Almuerzo", foods: ["200g carne roja magra", "150g arroz basmati", "Ensalada verde + 10g aceite de oliva"] },
    { timeRange: "16:00-19:00", meal: "Merienda", foods: ["Queso ricotta 150g", "1 cucharada miel", "15g nueces"] },
    { timeRange: "19:00-22:00", meal: "Cena", foods: ["200g atún fresco", "150g papa o batata", "Verduras asadas + aceite de oliva"] },
    { timeRange: "22:00-23:30", meal: "Snack nocturno", foods: ["200g queso cottage", "30g almendras", "1 fruta"] }
  ],
  6: [ // Sábado
    { timeRange: "7:00-10:00", meal: "Desayuno", foods: ["4 claras + 2 huevos", "80g avena con leche", "1 banana", "20g manteca de maní"] },
    { timeRange: "10:00-13:00", meal: "Media mañana", foods: ["2 rebanadas pan integral", "100g pavo/jamón cocido", "20g queso", "10 nueces", "1 yogur griego"] },
    { timeRange: "13:00-16:00", meal: "Almuerzo", foods: ["200g pollo", "150g arroz o pasta", "Ensalada con aceite de oliva", "1 fruta"] },
    { timeRange: "16:00-19:00", meal: "Merienda", foods: ["Batido: proteína + leche + avena + banana + manteca de maní"] },
    { timeRange: "19:00-22:00", meal: "Cena", foods: ["200g pescado/salmón", "150g batata", "Verduras al vapor + aceite de oliva"] },
    { timeRange: "22:00-23:30", meal: "Snack nocturno", foods: ["250g yogur griego o cottage", "30g frutos secos", "1 fruta"] }
  ]
};

  const getCurrentMeal = () => {
    const day = currentTime.getDay();
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    
    const dayMeals = mealSchedule[day] || [];
    
    for (const meal of dayMeals) {
      const [startTime, endTime] = meal.timeRange.split('-');
      const [startHour, startMin] = startTime.split(':').map(Number);
      const [endHour, endMin] = endTime.split(':').map(Number);
      
      const currentMinutes = hour * 60 + minute;
      const startMinutes = startHour * 60 + startMin;
      const endMinutes = endHour * 60 + endMin;
      
      if (currentMinutes >= startMinutes && currentMinutes < endMinutes) {
        return meal;
      }
    }
    
    return null;
  };

  const getCurrentWorkout = () => {
    const day = currentTime.getDay();
    return workoutSchedule[day] || { muscle: "Descanso", exercises: [] };
  };

  const getDayName = () => {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return days[currentTime.getDay()];
  };

  const currentMeal = getCurrentMeal();
  const currentWorkout = getCurrentWorkout();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">🏋️ Mi Entrenador Personal</h1>
          <div className="flex items-center justify-center gap-2 text-blue-200">
            <Clock size={20} />
            <span className="text-xl">
              {currentTime.toLocaleTimeString('es-AR', { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: false 
              })}
            </span>
            <span className="mx-2">•</span>
            <Calendar size={20} />
            <span className="text-xl">{getDayName()}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Entrenamiento */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <Dumbbell className="text-orange-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Entrenamiento de Hoy</h2>
            </div>
            
            <div className="bg-orange-500/20 rounded-xl p-4 mb-4">
              <h3 className="text-xl font-semibold text-orange-200 mb-2">
                {currentWorkout.muscle}
              </h3>
            </div>

            <div className="space-y-3">
              {currentWorkout.exercises.map((exercise, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-3">
                  <span className="text-gray-200">{exercise}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Alimentación */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <Apple className="text-green-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Alimentación Actual</h2>
            </div>

            {currentMeal ? (
              <>
                <div className="bg-green-500/20 rounded-xl p-4 mb-4">
                  <h3 className="text-xl font-semibold text-green-200 mb-1">
                    {currentMeal.meal}
                  </h3>
                  <span className="text-green-300 text-sm">
                    {currentMeal.timeRange}
                  </span>
                </div>

                <div className="space-y-3">
                  {currentMeal.foods.map((food, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-3 flex items-center gap-2">
                      <span className="text-green-300">•</span>
                      <span className="text-gray-200">{food}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="bg-yellow-500/20 rounded-xl p-4 text-center">
                <span className="text-yellow-200">
                  No hay comida programada para esta hora
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Plan del día completo */}
        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Plan Completo - {getDayName()}
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(mealSchedule[currentTime.getDay()] || []).map((meal, index) => (
              <div 
                key={index} 
                className={`bg-white/10 rounded-lg p-4 border ${
                  currentMeal && meal.timeRange === currentMeal.timeRange 
                    ? 'border-green-400 bg-green-500/20' 
                    : 'border-white/20'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-gray-200">{meal.meal}</h4>
                  <span className="text-xs text-gray-400">{meal.timeRange}</span>
                </div>
                <div className="space-y-1">
                  {meal.foods.slice(0, 2).map((food, i) => (
                    <div key={i} className="text-xs text-gray-300">• {food}</div>
                  ))}
                  {meal.foods.length > 2 && (
                    <div className="text-xs text-gray-400">
                      +{meal.foods.length - 2} más...
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-blue-300">
            💪 ¡Mantente constante y alcanza tus objetivos! 💪
          </p>
        </div>
      </div>
    </div>
  );
};

export default FitnessScheduler;