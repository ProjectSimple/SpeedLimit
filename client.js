let disable = true;
setTick(() => {
  if (IsPedInAnyVehicle(GetPlayerPed(-1), true)) {
    disable = false;

    let stName = GetStreetNameFromHashKey(
      GetStreetNameAtCoord(...GetEntityCoords(GetPlayerPed(-1)))[0]
    );
    let ogLimit = FindByName(stName);

    let limit = Math.round((ogLimit * 1.609) / 5) * 5;

    if (!ogLimit) {
      limit = "CD";
      console.log("Contact Developer!", stName, ogLimit);
    }

    SendNuiMessage(
      JSON.stringify({
        disable,
        limit,
      })
    );
  } else SendNuiMessage(JSON.stringify({ disable }));
});
