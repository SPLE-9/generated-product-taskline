/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useMemo } from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

// Format tanggal dari "Day Month DD HH:MM:SS TZ YYYY" menjadi format yang lebih mudah dibaca
const formatDate = (dateString) => {
  try {
    // Tanggal dalam format seperti "Sat May 24 00:00:00 WIB 2025"
    // Mari gunakan string asli saja dengan memotong bagian tertentu
    const parts = dateString.split(' ');
    if (parts.length >= 3) {
      // Mengembalikan dalam format "DD Month"
      const day = parts[2];
      const month = parts[1];
      return `${day} ${month}`;
    }
    return dateString; // Jika format tidak sesuai, kembalikan string asli
  } catch (error) {
    console.error("Error formatting date:", error);
    return dateString; // Kembalikan string asli jika terjadi error
  }
};

const TaskTable = ({ dataBinding }) => {
  const { checkPermission } = useAuth();
  
  // Format data untuk LineChart
  const formattedData = useMemo(() => {
    if (!dataBinding) return [];
    
    console.log("Raw data:", dataBinding);
    
    // Mengurutkan data berdasarkan tanggal
    const sortedData = [...dataBinding].sort((a, b) => {
      // Ambil tanggal dari string format
      const dateA = a.date.split(' ');
      const dateB = b.date.split(' ');
      
      // Jika format "Sat May 24 00:00:00 WIB 2025", ambil hari dan tahun untuk pengurutan
      if (dateA.length >= 6 && dateB.length >= 6) {
        // Urut berdasarkan tahun dan hari
        const yearA = parseInt(dateA[5]);
        const yearB = parseInt(dateB[5]);
        
        if (yearA !== yearB) return yearA - yearB;
        
        // Jika tahun sama, urut berdasarkan bulan
        const months = {"Jan": 0, "Feb": 1, "Mar": 2, "Apr": 3, "May": 4, "Jun": 5, 
                        "Jul": 6, "Aug": 7, "Sep": 8, "Oct": 9, "Nov": 10, "Dec": 11};
        const monthA = months[dateA[1]];
        const monthB = months[dateB[1]];
        
        if (monthA !== monthB) return monthA - monthB;
        
        // Jika bulan sama, urut berdasarkan tanggal
        const dayA = parseInt(dateA[2]);
        const dayB = parseInt(dateB[2]);
        
        return dayA - dayB;
      }
      
      // Fallback ke string comparison jika format tidak sesuai
      return a.date.localeCompare(b.date);
    });
    
    // Memetakan data yang sudah diurutkan
    const result = sortedData.map(item => {
      console.log("Item:", item, "totalTask:", item.totalTask, "totalTasks:", item.totalTasks);
      return {
        date: formatDate(item.date),
        totalTasks: item.totalTask || 0 // Gunakan 0 sebagai fallback jika undefined
      };
    });
    
    console.log("Formatted data:", result);
    return result;
  }, [dataBinding]);
  
  return (
    <>
      <h3 className="text-lg font-semibold mb-4">Grafik Jumlah Tugas Per Hari</h3>
      <Layouts.ListComponentLineChartLayout
        data={formattedData}
        itemsAttrs={[
          {
            id: "date",
            condition: "isXAxis",
            label: "Date",
            featureName: "date",
            editable: false
          },
          {
            id: "totalTasks",
            condition: "isSource",
            label: "Total Tasks",
            featureName: "totalTasks",
            editable: false
          }
        ]}
      />
    </>
  )
};

export default TaskTable;
