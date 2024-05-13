import { LIST_ADS_BY_CATEGORY_ID } from "@/queries/countries.queries";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

export default function CountrieList() {


    const { data, loading, error } = useQuery(LIST_ADS_BY_CATEGORY_ID, {
        onCompleted(data){
            console.log("DATA", data);
        },
        onError(error){
            console.log("ERROR", error);
        },
    });

    useEffect(() => {
            console.log("DATA", data);
    }, [data]);
    if(loading){
        return <h1>Loading...</h1>;
    } if(error){
        return <h1>Error</h1>;
    }
    return (
        <div>
            <h1>List of Countries</h1>
            <div>
                {data?.ListCountries.map((country: any) => (
                    <p key={country.id}>{country.name}</p>
                ))}
            </div>
        </div>
    )


  }
  