package com.gsoft.pokeapp.ui.myProfileScreen

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import com.gsoft.pokeapp.R
import com.gsoft.pokeapp.databinding.ActivityMainBinding
import com.gsoft.pokeapp.databinding.FragmentMyProfileBinding


class MyProfileFragment : Fragment(R.layout.fragment_my_profile) {


    private lateinit var binding: FragmentMyProfileBinding


    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding = FragmentMyProfileBinding.bind(this.requireView())
        binding.btnLogout.setOnClickListener {
            findNavController().navigate(R.id.action_myProfileFragment_to_loginFragment2)
        }
    }


}