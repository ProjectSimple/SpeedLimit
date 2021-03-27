setTick(() => {
  if (IsPedInAnyVehicle(GetPlayerPed(-1), true))
    SendNuiMessage(
      JSON.stringify({
        disable: false,
        limit:
          FindByName(
            GetStreetNameFromHashKey(
              GetStreetNameAtCoord(...GetEntityCoords(GetPlayerPed(-1)))[0]
            )
          ) || "CD",
      })
    );
  else SendNuiMessage(JSON.stringify({ disable: true }));
});
