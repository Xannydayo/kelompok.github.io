import app from "./App";
import React from "react";
import { useState } from "react";

"use client"

function App() {
    const [loading, setLoading] = useState(true);
}
return(
    loading ? <LoadingComponent /> : <AppComponent />
 );
